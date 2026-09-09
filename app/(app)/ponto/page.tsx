import type { Metadata } from "next";
import { Clock3 } from "lucide-react";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Incluir ponto",
};

export default function PontoPage() {
  return (
    <PagePlaceholder
      title="Incluir ponto"
      description="Registro rápido de entrada, intervalo e saída com hora do servidor."
      icon={Clock3}
    />
  );
}
