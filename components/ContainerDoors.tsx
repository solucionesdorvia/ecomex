"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ContainerDoorsProps = {
  isOpen: boolean;
};

export function ContainerDoors({ isOpen }: ContainerDoorsProps) {
  const depth = 240;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative w-full max-w-[720px] aspect-[72/38] [perspective:1800px]">
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 shadow-[0_60px_140px_rgba(0,0,0,0.6)]" />
        <div
          className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-br from-steel via-obsidian to-midnight"
          style={{ transform: `translateZ(-${depth}px)` }}
        />
        <div
          className="absolute left-0 top-0 h-full w-[240px] bg-gradient-to-br from-obsidian via-steel to-obsidian"
          style={{
            transformOrigin: "left",
            transform: `rotateY(90deg) translateZ(${depth}px)`
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-[240px] bg-gradient-to-br from-obsidian via-steel to-obsidian"
          style={{
            transformOrigin: "right",
            transform: `rotateY(-90deg) translateZ(${depth}px)`
          }}
        />
        <div
          className="absolute left-0 top-0 h-[240px] w-full bg-gradient-to-b from-steel to-obsidian"
          style={{
            transformOrigin: "top",
            transform: `rotateX(-90deg) translateZ(${depth}px)`
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-[240px] w-full bg-gradient-to-b from-black to-obsidian"
          style={{
            transformOrigin: "bottom",
            transform: `rotateX(90deg) translateZ(${depth}px)`
          }}
        />
      </div>

      <motion.div
        className={cn(
          "absolute left-0 top-0 h-full w-1/2 rounded-l-[32px] border-r border-white/10 bg-gradient-to-br from-steel via-obsidian to-midnight",
          "origin-left [transform-style:preserve-3d]"
        )}
        animate={{ rotateY: isOpen ? -115 : 0 }}
        transition={{ duration: 1.8, delay: 0.35, ease }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-6 rounded-2xl border border-white/10 bg-white/5" />
        <div
          className="absolute right-0 top-0 h-full w-4 bg-gradient-to-b from-white/20 via-white/10 to-transparent"
          style={{ transform: "rotateY(90deg) translateZ(8px)" }}
        />
      </motion.div>
      <motion.div
        className={cn(
          "absolute right-0 top-0 h-full w-1/2 rounded-r-[32px] border-l border-white/10 bg-gradient-to-br from-steel via-obsidian to-midnight",
          "origin-right [transform-style:preserve-3d]"
        )}
        animate={{ rotateY: isOpen ? 115 : 0 }}
        transition={{ duration: 1.8, delay: 0.35, ease }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-6 rounded-2xl border border-white/10 bg-white/5" />
        <div
          className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-white/20 via-white/10 to-transparent"
          style={{ transform: "rotateY(-90deg) translateZ(8px)" }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),rgba(59,130,246,0.26)_42%,transparent_72%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1.4, delay: 0.8, ease }}
        style={{ transform: `translateZ(-${depth - 40}px)` }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.4em] text-mist">
          E-COMEX
        </div>
      </div>
    </div>
  );
}
