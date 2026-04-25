// Mini renderer markdown-lite : titres ##, listes -, paragraphes, gras **, liens [txt](url).
// Léger et sans dépendance pour ne pas alourdir le bundle.

import { Fragment } from "react";

const renderInline = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // Replace links [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
  // Replace bold **text**
  const boldRegex = /\*\*([^*]+)\*\*/;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(linkRegex);
    const boldMatch = remaining.match(boldRegex);

    const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;
    const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;

    let nextIdx = -1;
    let kind: "link" | "bold" | null = null;

    if (linkIdx !== -1 && (boldIdx === -1 || linkIdx < boldIdx)) {
      nextIdx = linkIdx;
      kind = "link";
    } else if (boldIdx !== -1) {
      nextIdx = boldIdx;
      kind = "bold";
    }

    if (kind === null) {
      nodes.push(<Fragment key={key++}>{remaining}</Fragment>);
      break;
    }

    if (nextIdx > 0) {
      nodes.push(<Fragment key={key++}>{remaining.slice(0, nextIdx)}</Fragment>);
    }

    if (kind === "link" && linkMatch) {
      nodes.push(
        <a
          key={key++}
          href={linkMatch[2]}
          target={linkMatch[2].startsWith("http") ? "_blank" : undefined}
          rel={linkMatch[2].startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-primary underline underline-offset-2 hover:opacity-80"
        >
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.slice(nextIdx + linkMatch[0].length);
    } else if (kind === "bold" && boldMatch) {
      nodes.push(
        <strong key={key++} className="font-semibold text-foreground">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(nextIdx + boldMatch[0].length);
    }
  }

  return nodes;
};

interface Props {
  content: string;
}

const MarkdownContent = ({ content }: Props) => {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let currentList: string[] | null = null;
  let blockKey = 0;

  const flushList = () => {
    if (currentList && currentList.length > 0) {
      blocks.push(
        <ul key={`ul-${blockKey++}`} className="list-disc pl-6 space-y-2 my-4 text-muted-foreground">
          {currentList.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      currentList = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith("### ")) {
      flushList();
      blocks.push(
        <h3 key={`h3-${blockKey++}`} className="font-display text-xl font-semibold mt-8 mb-3 text-foreground">
          {renderInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2 key={`h2-${blockKey++}`} className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4 text-gradient-gold">
          {renderInline(line.slice(3))}
        </h2>
      );
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
      // ordered list as paragraph for simplicity
      blocks.push(
        <p key={`ol-${blockKey++}`} className="text-muted-foreground leading-relaxed my-2">
          {renderInline(line)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      if (!currentList) currentList = [];
      currentList.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      blocks.push(
        <p key={`p-${blockKey++}`} className="text-muted-foreground leading-relaxed my-4">
          {renderInline(line)}
        </p>
      );
    }
  }
  flushList();

  return <div className="prose-content">{blocks}</div>;
};

export default MarkdownContent;
