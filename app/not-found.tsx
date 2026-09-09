import Link from "next/link";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <Brand />
      <h1 className="text-2xl font-semibold">Página não encontrada</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        Confira o endereço ou volte para a página inicial.
      </p>
      <Button asChild>
        <Link href="/">Ir para o início</Link>
      </Button>
    </div>
  );
}
