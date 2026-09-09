import type { Metadata } from "next";
import { Inbox } from "lucide-react";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Solicitações",
};

export default function RequestsPage() {
  return (
    <PagePlaceholder
      title="Solicitações"
      description="Ajustes, esquecimentos e abonos vinculados ao cartão-ponto."
      icon={Inbox}
    />
  );
}
