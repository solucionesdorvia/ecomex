import { TaxLine } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";

type TaxTableProps = {
  taxes: TaxLine[];
  landedCost: string;
};

export function TaxTable({ taxes, landedCost }: TaxTableProps) {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">Estructura impositiva</h4>
        <Badge>Actualizado hoy</Badge>
      </div>
      <div className="mt-6 space-y-3 text-sm text-mist">
        {taxes.map((tax) => (
          <div
            key={tax.label}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <div>
              <div className="text-white">{tax.label}</div>
              <div className="text-xs text-mist">{tax.rate}</div>
            </div>
            <div className="text-right text-white">{tax.amount}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-azure/25 bg-azure/10 px-5 py-5 text-sm">
        <div className="text-xs uppercase tracking-[0.35em] text-mist">
          Landed cost total
        </div>
        <div className="mt-2 text-2xl font-semibold text-white">
          {landedCost}
        </div>
      </div>
    </Panel>
  );
}
