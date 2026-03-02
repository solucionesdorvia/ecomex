import { Operation } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";

type OperationCardProps = Operation;

const statusStyles: Record<Operation["status"], NonNullable<BadgeProps["variant"]>> =
  {
  "on-track": "success",
  risk: "warning",
  hold: "neutral"
};

export function OperationCard({
  title,
  subtitle,
  status,
  eta
}: OperationCardProps) {
  return (
    <Panel className="p-5 transition hover:border-white/20 hover:shadow-glow">
      <div className="flex items-center justify-between text-xs text-mist">
        <span>{eta}</span>
        <Badge
          variant={statusStyles[status]}
          className={cn("uppercase tracking-[0.2em]")}
        >
          {status}
        </Badge>
      </div>
      <h4 className="mt-3 text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-mist">{subtitle}</p>
    </Panel>
  );
}
