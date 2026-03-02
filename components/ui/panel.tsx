import * as React from "react";
import { cn } from "@/lib/utils";

export type PanelProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "glass" | "solid";
};

const variantClasses: Record<NonNullable<PanelProps["variant"]>, string> = {
  glass: "glass-panel",
  solid: "border border-white/10 bg-obsidian/80 shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
};

export function Panel({
  className,
  variant = "glass",
  ...props
}: PanelProps) {
  return (
    <div
      className={cn("rounded-2xl p-6", variantClasses[variant], className)}
      {...props}
    />
  );
}

