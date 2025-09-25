"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Bouton avec léger effet de "shimmer" doré, discret et respectueux d'a11y
// L'effet est désactivé si l'utilisateur préfère réduire les animations
export function ShimmerButton({ asChild, className, children, ...props }: ShimmerButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium",
        "bg-primary text-primary-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "overflow-hidden transition-colors rb-shimmer",
        className
      )}
    >
      {children}
    </Comp>
  );
}


