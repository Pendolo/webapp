import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PagePlaceholder({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <section className="flex flex-1 flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
        </div>
        <Badge variant="secondary">Em construção</Badge>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed bg-card px-6 py-16 text-center shadow-sm">
        <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent text-primary">
          <Icon className="size-6" aria-hidden />
        </span>
        <p className="max-w-md text-sm text-muted-foreground">
          Esta tela faz parte da estrutura do MVP e será ligada às regras de
          domínio, autenticação e persistência nas próximas etapas.
        </p>
      </div>
    </section>
  );
}
