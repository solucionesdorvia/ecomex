"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContainerDoors } from "@/components/ContainerDoors";
import { FogLayer } from "@/components/FogLayer";

export function ContainerScene() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);
  const ease = [0.22, 1, 0.36, 1] as const;

  useEffect(() => {
    if (!isOpening) return;
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3600);
    return () => clearTimeout(timer);
  }, [isOpening, router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,111,235,0.20),transparent_58%)]" />
        <div className="absolute inset-0 grid-overlay opacity-25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <header className="flex items-center justify-between py-8">
          <div className="text-xs font-semibold uppercase tracking-[0.45em] text-white/85">
            E-COMEX
          </div>
          <nav className="hidden items-center gap-8 text-sm text-mist md:flex">
            <a className="hover:text-white" href="#">
              Plataforma
            </a>
            <a className="hover:text-white" href="#">
              Servicios
            </a>
            <a className="hover:text-white" href="#">
              Casos
            </a>
            <a className="hover:text-white" href="#">
              Recursos
            </a>
          </nav>
          <Button
            variant="white"
            className="px-5 py-2.5 text-sm"
            onClick={() => router.push("/dashboard")}
          >
            Solicitar demo
          </Button>
        </header>

        <motion.div
          className="flex flex-1 flex-col items-center justify-center gap-10 pb-16 [perspective:1600px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          <div className="w-full max-w-3xl text-center">
            <Badge
              variant="accent"
              className="border-white/10 bg-white/5 text-white/85"
            >
              Plataforma + Validación experta
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Cotización inteligente para Comercio Exterior
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm text-mist sm:text-base">
              Automatizá clasificación, estimación de costos e impuestos y
              gestión de cotizaciones en un flujo auditable.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" onClick={() => router.push("/dashboard")}>
                Solicitar demo
              </Button>
              <Button
                variant="secondary"
                onClick={() => router.push("/dashboard")}
              >
                Ver cómo funciona
              </Button>
            </div>
          </div>

          <motion.div
            className="relative w-full max-w-[860px]"
            animate={{
              scale: isOpening ? 1.12 : 1,
              z: isOpening ? 300 : 0,
              y: isOpening ? 10 : 0
            }}
            transition={{
              duration: 2.4,
              delay: 0.12,
              ease
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="mx-auto w-full max-w-[720px]">
              <ContainerDoors isOpen={isOpening} />
              <FogLayer isActive={isOpening} />
              <motion.div
                className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),rgba(59,130,246,0.20)_42%,transparent_72%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpening ? 1 : 0 }}
                transition={{ duration: 1.6, delay: 0.9, ease }}
              />
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            animate={{ opacity: isOpening ? 0 : 1 }}
            transition={{ duration: 0.6, ease }}
          >
            <Button
              variant="ghost"
              onClick={() => setIsOpening(true)}
              disabled={isOpening}
            >
              Abrir contenedor
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
