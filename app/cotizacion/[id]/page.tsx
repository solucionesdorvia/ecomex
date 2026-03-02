import { DashboardLayout } from "@/components/DashboardLayout";
import { QuoteAnalysisCard } from "@/components/QuoteAnalysisCard";
import { RequirementList } from "@/components/RequirementList";
import { TaxTable } from "@/components/TaxTable";
import { OperationCard } from "@/components/OperationCard";
import { AssistantPanel } from "@/components/AssistantPanel";
import { Reveal } from "@/components/Reveal";
import { fetchQuoteMock } from "@/lib/mock-data";
import { Panel } from "@/components/ui/panel";

type QuotePageProps = {
  params: { id: string };
};

export default async function QuotePage({ params }: QuotePageProps) {
  const quote = await fetchQuoteMock(params.id);

  return (
    <DashboardLayout
      title="Analisis de cotizacion"
      subtitle={`Cotizacion ${quote.id} · Datos listos para exportacion`}
    >
      <div className="space-y-8">
        <QuoteAnalysisCard
          productName={quote.productName}
          productImage={quote.productImage}
          ncmCode={quote.ncmCode}
          confidence={quote.confidence}
          regulations={quote.regulations}
        />

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <Reveal>
              <RequirementList requirements={quote.requirements} />
            </Reveal>
            <Reveal delay={0.1}>
              <Panel>
                <h4 className="text-lg font-semibold">
                  Tracking del embarque
                </h4>
                <div className="mt-6 space-y-4 text-sm">
                  {quote.timeline.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
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
              <Panel>
                <h4 className="text-lg font-semibold">Operaciones en curso</h4>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {quote.operations.map((operation) => (
                    <OperationCard key={operation.title} {...operation} />
                  ))}
                </div>
              </Panel>
            </Reveal>
            <Reveal delay={0.2}>
              <Panel>
                <h4 className="text-lg font-semibold">
                  Documentacion requerida
                </h4>
                <div className="mt-5 space-y-3 text-sm text-mist">
                  {quote.documents.map((doc) => (
                    <div
                      key={doc}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      {doc}
                    </div>
                  ))}
                </div>
              </Panel>
            </Reveal>
          </div>
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <TaxTable taxes={quote.taxes} landedCost={quote.landedCost} />
            </Reveal>
            <AssistantPanel notes={quote.assistantNotes} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
