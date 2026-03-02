import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "neutral" | "primary" | "accent" | "success" | "warning";
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  neutral: "border-white/10 bg-white/5 text-mist",
  primary: "border-cobalt/40 bg-cobalt/10 text-white",
  accent: "border-azure/40 bg-azure/10 text-azure",
  success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  warning: "border-gold/40 bg-gold/10 text-gold"
};

export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

