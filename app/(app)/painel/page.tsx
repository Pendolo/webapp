import type { Metadata } from "next";
import { LayoutDashboard } from "lucide-react";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Painel",
};

export default function DashboardPage() {
  return (
    <PagePlaceholder
      title="Painel do gestor"
      description="Exceções do dia, solicitações pendentes e status do fechamento."
      icon={LayoutDashboard}
    />
  );
}
