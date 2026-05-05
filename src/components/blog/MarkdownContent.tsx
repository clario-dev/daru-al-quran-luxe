// Mini renderer markdown-lite : titres ##/###, listes -, paragraphes, gras **, liens [txt](url).
// Plus :
//  - [[CTA]]                             → bouton d'inscription (URL masquée)
//  - > AR: ... texte arabe ...           → bloc citation arabe (RTL)
//  - > TR: ... traduction française ...  → bloc traduction
//  - > REF: ... référence ...            → ligne de référence (savants/source)

import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookMarked, Download } from "lucide-react";

const CHARIOW_URL = "https://daaralquran.mychariow.shop/prd_ijq3ih/checkout";

const renderInline = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
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
      // Hide chariow URLs: render as styled CTA button instead of visible href text
      const url = linkMatch[2];
      const label = linkMatch[1];
      const isChariow = url.includes("mychariow.shop");
      if (isChariow) {
        nodes.push(
          <span key={key++} className="inline-block my-1">
            <Button asChild size="sm" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label} <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </span>
        );
      } else {
        nodes.push(
          <a
            key={key++}
            href={url}
            target={url.startsWith("http") ? "_blank" : undefined}
            rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-primary underline underline-offset-2 hover:opacity-80"
          >
            {label}
          </a>
        );
      }
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

    if (line.trim() === "[[CTA]]") {
      flushList();
      blocks.push(
        <div key={`cta-${blockKey++}`} className="my-10 p-6 md:p-8 rounded-2xl border border-primary/30 bg-gradient-card shadow-glow-gold text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">Passez à l'action dès aujourd'hui</h3>
          <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
            Cours en direct sur Zoom · Hommes, femmes et enfants (sections séparées) · Méthodologie des pieux prédécesseurs · Garantie satisfait ou remboursé sous 7 jours.
          </p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
            <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
              S'inscrire à Daaru Al'Qurane — 10 € <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      );
    } else if (line.startsWith("[[DOWNLOAD:")) {
      flushList();
      // Format: [[DOWNLOAD:/path/to/file.pdf|Title|Subtitle]]
      const match = line.trim().match(/^\[\[DOWNLOAD:([^|]+)\|([^|]+)\|([^\]]+)\]\]$/);
      if (match) {
        const [, url, title, subtitle] = match;
        blocks.push(
          <div key={`dl-${blockKey++}`} className="my-10 p-6 md:p-8 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/15 flex items-center justify-center">
              <Download className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-5 max-w-xl mx-auto">{subtitle}</p>
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
              <a href={url} download target="_blank" rel="noopener noreferrer">
                Télécharger gratuitement (PDF) <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Format PDF · Lecture sur tout appareil · Aucun email demandé</p>
          </div>
        );
      }
    } else if (line.startsWith("> AR:")) {
      flushList();
      blocks.push(
        <p
          key={`ar-${blockKey++}`}
          dir="rtl"
          lang="ar"
          className="my-3 text-2xl md:text-3xl leading-loose text-foreground font-medium text-right"
          style={{ fontFamily: "'Amiri Quran', 'Scheherazade New', serif" }}
        >
          {line.slice(5).trim()}
        </p>
      );
    } else if (line.startsWith("> TR:")) {
      flushList();
      blocks.push(
        <blockquote key={`tr-${blockKey++}`} className="my-3 border-l-4 border-primary pl-4 italic text-foreground/90 leading-relaxed">
          « {renderInline(line.slice(5).trim())} »
        </blockquote>
      );
    } else if (line.startsWith("> REF:")) {
      flushList();
      blocks.push(
        <p key={`ref-${blockKey++}`} className="text-xs text-muted-foreground mb-6 flex items-center gap-1.5">
          <BookMarked className="h-3 w-3 text-primary" />
          {renderInline(line.slice(6).trim())}
        </p>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      blocks.push(
        <h3 key={`h3-${blockKey++}`} className="font-display text-xl font-semibold mt-8 mb-3 text-foreground">
          {renderInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2 key={`h2-${blockKey++}`} className="font-display text-2xl md:text-3xl font-semibold mt-10 mb-4 text-gradient-gold">
          {renderInline(line.slice(3))}
        </h2>
      );
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
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
