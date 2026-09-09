import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { Brand } from "@/components/brand";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Criar empresa",
};

export default function SignupPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10">
      <div className="mb-8">
        <Brand />
      </div>
      <PagePlaceholder
        title="Criar empresa"
        description="Onboarding da primeira organização, administrador e jornada padrão."
        icon={Building2}
      />
    </div>
  );
}
