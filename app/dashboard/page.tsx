import Link from "next/link";
import { DashboardLayout } from "@/components/DashboardLayout";
import { OperationCard } from "@/components/OperationCard";
import { Reveal } from "@/components/Reveal";
import { fetchDashboardMock } from "@/lib/mock-data";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const dashboard = await fetchDashboardMock();

  return (
    <DashboardLayout
      title="Dashboard operativo"
      subtitle="Estado global de embarques y cotizaciones activas"
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <Reveal>
            <Panel>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Ingreso de producto</h3>
                  <p className="mt-1 text-sm text-mist">
                    Pega un link o describe el producto para iniciar una
                    cotizacion.
                  </p>
                </div>
                <Badge variant="accent">Listo</Badge>
              </div>
              <div className="mt-5 flex flex-col gap-3 md:flex-row">
                <Input
                  className="flex-1"
                  placeholder="https://proveedor.com/producto-xyz o descripcion"
                />
                <Button className="md:px-7" variant="primary">
                  Analizar
                </Button>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.1}>
            <Panel>
              <h3 className="text-lg font-semibold">Progreso de embarque</h3>
              <div className="mt-6 space-y-4">
                {dashboard.progress.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                  >
                    <div>
                      <div className="text-white">{item.label}</div>
                      <div className="text-xs text-mist">{item.date}</div>
                    </div>
                    <span
                      className={`text-xs uppercase tracking-[0.2em] ${
                        item.status === "done"
                          ? "text-emerald-300"
                          : item.status === "active"
                            ? "text-azure"
                            : "text-mist"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4 lg:grid-cols-3">
              {dashboard.operations.map((operation) => (
                <OperationCard key={operation.title} {...operation} />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={0.2}>
            <Panel>
              <h3 className="text-lg font-semibold">Cotizaciones guardadas</h3>
              <div className="mt-5 space-y-3 text-sm">
                {dashboard.savedQuotes.map((quote) => (
                  <Link
                    key={quote.id}
                    href={`/cotizacion/${quote.id}`}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-mist transition hover:border-azure/40 hover:text-white"
                  >
                    <span>{quote.label}</span>
                    <span className="text-xs text-azure">{quote.value}</span>
                  </Link>
                ))}
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.25}>
            <Panel>
              <h3 className="text-lg font-semibold">Acciones rápidas</h3>
              <div className="mt-5 space-y-3 text-sm text-mist">
                {dashboard.quickActions.map((action) => (
                  <div
                    key={action}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-azure/40 hover:text-white"
                  >
                    {action}
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>
        </div>
      </div>
    </DashboardLayout>
  );
}
