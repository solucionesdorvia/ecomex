"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";

type QuoteAnalysisCardProps = {
  productName: string;
  productImage: string;
  ncmCode: string;
  confidence: number;
  regulations: string[];
};

export function QuoteAnalysisCard({
  productName,
  productImage,
  ncmCode,
  confidence,
  regulations
}: QuoteAnalysisCardProps) {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <Panel className="grid gap-8 rounded-3xl p-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <Image
          src={productImage}
          alt={productName}
          width={1200}
          height={800}
          className="h-64 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute bottom-5 left-5">
          <p className="text-xs uppercase tracking-[0.4em] text-mist">
            Producto analizado
          </p>
          <h3 className="mt-2 text-2xl font-semibold">{productName}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-mist">
            Clasificacion NCM
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
            <div className="text-xs uppercase tracking-[0.35em] text-mist">
              Código sugerido
            </div>
            <div className="mt-2 text-3xl font-semibold text-white">{ncmCode}</div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-mist">
              <span>Confianza AI</span>
              <span>{Math.round(confidence * 100)}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-azure"
                style={{ width: `${confidence * 100}%` }}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {regulations.map((reg) => (
              <Badge key={reg} className="border-white/10 bg-white/5 text-mist">
                {reg}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button>Exportar PDF</Button>
          <Button variant="secondary">Cotización formal</Button>
          <Button variant="ghost">Hablar con asesor</Button>
        </div>
      </div>
      </Panel>
    </motion.section>
  );
}
