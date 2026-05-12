import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  background?: "default" | "muted" | "primary" | "gradient";
}

export function Section({
  children,
  id,
  background = "default",
  className,
  ...props
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/50",
    primary: "bg-primary/5",
    gradient: "bg-gradient-to-b from-primary/10 to-background",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", bgClasses[background], className)}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function PageHeader({
  title,
  description,
  align = "center",
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

interface CTABoxProps {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
  variant?: "default" | "outline" | "secondary";
  icon?: React.ReactNode;
}

export function CTABox({
  title,
  description,
  actionLabel,
  onAction,
  variant = "default",
  icon,
}: CTABoxProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <button
        onClick={onAction}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          "h-10 px-4 py-2 w-full md:w-auto",
          variant === "default" &&
            "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "outline" &&
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        {actionLabel}
      </button>
    </div>
  );
}
