import * as React from "react";
import { SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkipLinkProps {
  href?: string;
  className?: string;
}

export function SkipLink({ href = "#main-content", className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]",
        "focus:bg-background focus:text-foreground focus:px-4 focus:py-2",
        "focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring",
        className
      )}
    >
      <SkipForward className="inline-block h-4 w-4 mr-2" />
      Aller au contenu principal
    </a>
  );
}
