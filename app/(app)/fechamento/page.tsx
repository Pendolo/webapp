import type { Metadata } from "next";
import { ClipboardCheck } from "lucide-react";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Fechamento mensal",
};

export default function ClosingPage() {
  return (
    <PagePlaceholder
      title="Fechamento mensal"
      description="Checklist de pendências, bloqueio da competência e exportação CSV."
      icon={ClipboardCheck}
    />
  );
}
