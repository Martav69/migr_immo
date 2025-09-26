import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// Variants du bouton avec design moderne
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentGreen focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Bouton principal - fond sombre sur surface claire
        primary:
          "bg-ink text-surface hover:bg-ink/90 hover:shadow-lift active:scale-[0.98]",
        // Bouton secondaire - outline subtil
        secondary:
          "border border-border bg-transparent text-ink hover:bg-surface hover:border-accentGreen/20 hover:shadow-soft active:scale-[0.98]",
        // Bouton fantôme - minimal
        ghost:
          "text-ink hover:bg-surface/50 hover:text-accentGreen active:scale-[0.98]",
        // Bouton destructif - rouge
        destructive:
          "bg-red-600 text-white hover:bg-red-700 hover:shadow-lift active:scale-[0.98]",
        // Bouton avec icône téléphone
        phone:
          "border border-border bg-surface text-ink hover:bg-surface hover:border-accentGreen hover:text-accentGold hover:shadow-soft active:scale-[0.98]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
  showPhone?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showArrow = false, showPhone = false, children, ...props }, ref) => {
    // Si asChild, on ne peut pas utiliser les icônes car Slot attend un seul enfant
    // Dans ce cas, on applique juste les styles au composant enfant
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    // Bouton normal avec icônes
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {showPhone && <Phone className="size-3" />}
        {children}
        {showArrow && <ArrowRight className="size-3" />}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };