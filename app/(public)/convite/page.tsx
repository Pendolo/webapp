import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Brand } from "@/components/brand";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Convite",
};

export default function InvitePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10">
      <div className="mb-8">
        <Brand />
      </div>
      <PagePlaceholder
        title="Aceitar convite"
        description="O colaborador define a senha no primeiro acesso com um token de convite."
        icon={Mail}
      />
    </div>
  );
}
