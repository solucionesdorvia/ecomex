import { Requirement } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";

type RequirementListProps = {
  requirements: Requirement[];
};

const statusStyles: Record<Requirement["status"], string> = {
  required: "border-rose-400/40 bg-rose-500/10 text-rose-100",
  "in-review": "border-amber-400/40 bg-amber-500/10 text-amber-100",
  approved: "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
};

export function RequirementList({ requirements }: RequirementListProps) {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">Requisitos de importacion</h4>
        <span className="text-xs text-mist">Prioridad aduanera</span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {requirements.map((req) => (
          <div
            key={req.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <Badge
              className={cn("uppercase tracking-[0.2em]", statusStyles[req.status])}
            >
              {req.status.replace("-", " ")}
            </Badge>
            <h5 className="mt-3 text-base font-semibold">{req.title}</h5>
            <p className="mt-2 text-xs text-mist">{req.detail}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
