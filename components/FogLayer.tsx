"use client";

import { motion } from "framer-motion";

type FogLayerProps = {
  isActive: boolean;
};

export function FogLayer({ isActive }: FogLayerProps) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden [transform-style:preserve-3d]"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? -10 : 30,
        scale: isActive ? 1.05 : 0.96
      }}
      transition={{ duration: 1.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-white/16 blur-[100px]" />
      <div className="absolute right-8 top-12 h-96 w-96 rounded-full bg-azure/20 blur-[130px]" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-cobalt/14 blur-[120px]" />
    </motion.div>
  );
}
