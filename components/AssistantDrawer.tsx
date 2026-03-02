"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function AssistantDrawer() {
  const [open, setOpen] = useState(false);

  const quickActions = useMemo(
    () => ["Clasificar", "Cotizar", "Hablar con un operador"],
    []
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-5 right-5 z-50",
          "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(0,0,0,0.45)] backdrop-blur",
          "transition hover:border-azure/35 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
        )}
        aria-label="Abrir asistente"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-cobalt/60">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 9.5C7 8.11929 8.11929 7 9.5 7H14.5C15.8807 7 17 8.11929 17 9.5V12.5C17 13.8807 15.8807 15 14.5 15H12L9.5 17.5V15H9.5C8.11929 15 7 13.8807 7 12.5V9.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden sm:inline">Asistente</span>
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-50 cursor-default bg-black/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setOpen(false)}
              aria-label="Cerrar asistente"
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 w-full max-w-[420px]"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <Panel
                variant="solid"
                className="h-full rounded-none border-l border-white/10 bg-obsidian/92 p-6 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.35em] text-mist">
                      Asistente E-Comex
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Integración en desarrollo
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="px-3 py-2"
                    onClick={() => setOpen(false)}
                  >
                    Cerrar
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <Badge
                      key={action}
                      className="border-white/10 bg-white/5 text-white/85"
                    >
                      {action}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <Input disabled placeholder="Próximamente" />
                  <div className="text-xs text-mist">
                    La interfaz está lista. La conexión con fuentes y modelos se
                    habilita en una siguiente etapa.
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-xs uppercase tracking-[0.35em] text-mist">
                    Estado
                  </div>
                  <div className="mt-3 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-mist">
                      - UI nativa del producto
                      <br />- Sin backend ni API
                      <br />- Sin autenticación
                    </div>
                  </div>
                </div>
              </Panel>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

