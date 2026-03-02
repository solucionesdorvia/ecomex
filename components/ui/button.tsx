import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "white";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "relative bg-gradient-to-b from-cobalt to-azure text-white shadow-[0_18px_70px_rgba(0,0,0,0.35)] hover:from-azure hover:to-cobalt",
  secondary:
    "relative border border-azure/25 bg-white/5 text-white hover:border-azure/55 hover:bg-white/10",
  ghost:
    "relative bg-transparent text-mist hover:text-white hover:bg-white/10",
  white:
    "relative bg-white text-midnight shadow-[0_22px_70px_rgba(0,0,0,0.35)] hover:bg-white/90"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute -left-8 top-0 h-10 w-24 -translate-y-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] opacity-0 blur-sm transition duration-500 group-hover:opacity-60" />
      </span>
      <span className="relative">{children}</span>
    </button>
  )
);

Button.displayName = "Button";
