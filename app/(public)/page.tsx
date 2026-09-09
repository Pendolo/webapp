import Link from "next/link";
import { CheckCircle2, Clock3, ClipboardCheck } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    title: "Registrar ponto",
    description: "Entrada, intervalo e saída em poucos segundos no celular.",
    icon: Clock3,
  },
  {
    title: "Resolver pendências",
    description: "Ajustes e aprovações ficam no cartão-ponto, não no WhatsApp.",
    icon: CheckCircle2,
  },
  {
    title: "Fechar o mês",
    description: "Conferência, saldo e exportação para o gestor ou contador.",
    icon: ClipboardCheck,
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-5">
        <Brand />
        <Button asChild variant="outline">
          <Link href="/login">Entrar</Link>
        </Button>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-4 pb-16 pt-8">
        <section className="max-w-2xl space-y-5">
          <p className="text-sm font-medium text-primary">Controle de ponto para pequenas equipes</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Registre a jornada, resolva pendências e feche o mês sem planilhas.
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Pendolo é um SaaS web multiempresa para empresas e escritórios de
            pequeno porte no Brasil.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/cadastro">Criar empresa</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/login">Já tenho conta</Link>
            </Button>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <span className="mb-2 flex size-9 items-center justify-center rounded-full bg-accent text-primary">
                  <item.icon className="size-4" aria-hidden />
                </span>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
