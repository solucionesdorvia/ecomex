"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { AssistantDrawer } from "@/components/AssistantDrawer";

type DashboardLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

export function DashboardLayout({
  children,
  title,
  subtitle
}: DashboardLayoutProps) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Dashboard", href: "/dashboard", enabled: true },
      { label: "Cotizacion", href: "/cotizacion/comex-912", enabled: true },
      { label: "Operaciones", href: "#", enabled: false },
      { label: "Documentacion", href: "#", enabled: false },
      { label: "Analitica", href: "#", enabled: false }
    ],
    []
  );

  return (
    <div className="min-h-screen bg-midnight text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,111,235,0.16),transparent_56%)]" />
      </div>

      <div className="relative flex">
        <aside className="hidden min-h-screen w-72 flex-col border-r border-white/10 bg-obsidian/70 p-6 backdrop-blur lg:flex">
          <div className="text-xs font-semibold uppercase tracking-[0.45em] text-white/85">
            E-COMEX
          </div>
          <div className="mt-10 space-y-2 text-sm">
            {navItems.map((item) => {
              const isActive =
                item.enabled && item.href !== "#"
                  ? pathname === item.href ||
                    (item.href !== "/dashboard" && pathname.startsWith(item.href))
                  : false;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-disabled={!item.enabled}
                  tabIndex={item.enabled ? 0 : -1}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3 transition",
                    item.enabled
                      ? "text-mist hover:bg-white/10 hover:text-white"
                      : "cursor-not-allowed text-mist/50",
                    isActive && "bg-white/10 text-white ring-1 ring-white/10"
                  )}
                  onClick={(e) => {
                    if (!item.enabled) e.preventDefault();
                  }}
                >
                  <span>{item.label}</span>
                  {item.enabled ? (
                    <span className="text-xs text-white/35">↗</span>
                  ) : (
                    <Badge className="border-white/10 bg-white/5 text-white/60">
                      Próximamente
                    </Badge>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-mist">
            Control de riesgos activado
            <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 w-[68%] rounded-full bg-azure/80" />
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-obsidian/55 px-6 py-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/8 lg:hidden"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Abrir menú"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-mist">
                  Plataforma logística inteligente
                </p>
                <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
                  {title}
                </h2>
                {subtitle ? (
                  <p className="mt-1 text-sm text-mist">{subtitle}</p>
                ) : null}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-mist md:flex">
                Enlace directo
                <span className="rounded-full bg-azure/80 px-2 py-1 text-[10px] text-white">
                  LIVE
                </span>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
                valentina@ecomex.io
              </div>
            </div>
          </header>

          <main className="min-w-0 px-6 py-10">{children}</main>
        </div>
      </div>

      {mobileNavOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/55"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Cerrar menú"
          />
          <div className="absolute left-0 top-0 h-full w-[min(92vw,360px)] border-r border-white/10 bg-obsidian/92 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.45em] text-white/85">
                E-COMEX
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
                onClick={() => setMobileNavOpen(false)}
              >
                Cerrar
              </button>
            </div>
            <div className="mt-8 space-y-2 text-sm">
              {navItems.map((item) => {
                const isActive =
                  item.enabled && item.href !== "#"
                    ? pathname === item.href ||
                      (item.href !== "/dashboard" &&
                        pathname.startsWith(item.href))
                    : false;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-disabled={!item.enabled}
                    tabIndex={item.enabled ? 0 : -1}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 transition",
                      item.enabled
                        ? "text-mist hover:bg-white/10 hover:text-white"
                        : "cursor-not-allowed text-mist/50",
                      isActive && "bg-white/10 text-white ring-1 ring-white/10"
                    )}
                    onClick={(e) => {
                      if (!item.enabled) {
                        e.preventDefault();
                        return;
                      }
                      setMobileNavOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    {item.enabled ? (
                      <span className="text-xs text-white/35">↗</span>
                    ) : (
                      <Badge className="border-white/10 bg-white/5 text-white/60">
                        Próximamente
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <AssistantDrawer />
    </div>
  );
}
