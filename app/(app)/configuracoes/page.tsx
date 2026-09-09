import type { Metadata } from "next";
import { Settings } from "lucide-react";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Configurações",
};

export default function SettingsPage() {
  return (
    <PagePlaceholder
      title="Configurações"
      description="Empresa, jornada, senha, sessões e preferências pessoais."
      icon={Settings}
    />
  );
}
