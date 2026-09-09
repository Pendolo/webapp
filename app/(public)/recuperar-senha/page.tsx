import type { Metadata } from "next";
import { KeyRound } from "lucide-react";
import { Brand } from "@/components/brand";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Recuperar senha",
};

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10">
      <div className="mb-8">
        <Brand />
      </div>
      <PagePlaceholder
        title="Recuperar senha"
        description="Envio de token de uso único para redefinir a senha da conta."
        icon={KeyRound}
      />
    </div>
  );
}
