"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";

type AssistantPanelProps = {
  notes: string[];
};

export function AssistantPanel({ notes }: AssistantPanelProps) {
  return (
    <motion.div
      className="rounded-2xl"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Panel className="p-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Asistente E-Comex</h4>
          <Badge className="border-white/10 bg-white/5 text-white/70">
            Próximamente
          </Badge>
        </div>
        <div className="mt-5 space-y-4 text-sm text-mist">
          {notes.map((note) => (
            <div
              key={note}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              {note}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-mist">
          Integración en desarrollo. La experiencia final vive en el drawer de
          asistente.
        </div>
      </Panel>
    </motion.div>
  );
}
