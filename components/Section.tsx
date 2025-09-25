import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "surface";
}

// Composant Section pour gérer l'espacement vertical et les arrière-plans
export function Section({ 
  children, 
  className, 
  spacing = "lg",
  background = "default"
}: SectionProps) {
  const spacingClasses = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20", 
    lg: "py-20 sm:py-24",
    xl: "py-24 sm:py-32",
  };

  const backgroundClasses = {
    default: "bg-bg",
    muted: "bg-surface/50",
    surface: "bg-surface",
  };

  return (
    <section 
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
