import type { ReactNode } from "react";
import Link from "next/link";
import {
  CalendarDays,
  ClipboardCheck,
  Clock3,
  Inbox,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { Brand } from "@/components/brand";
import { APP_PATHS } from "@/lib/constants";

const navItems = [
  { href: APP_PATHS.ponto, label: "Incluir ponto", icon: Clock3 },
  { href: APP_PATHS.cartaoPonto, label: "Cartão-ponto", icon: CalendarDays },
  { href: APP_PATHS.solicitacoes, label: "Solicitações", icon: Inbox },
  { href: APP_PATHS.painel, label: "Painel", icon: LayoutDashboard },
  { href: APP_PATHS.fechamento, label: "Fechamento", icon: ClipboardCheck },
  { href: APP_PATHS.configuracoes, label: "Configurações", icon: Settings },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 bg-background">
      <aside className="hidden w-64 shrink-0 border-r bg-sidebar md:flex md:flex-col">
        <div className="border-b px-5 py-4">
          <Brand href={APP_PATHS.ponto} />
        </div>
        <nav aria-label="Área autenticada" className="flex flex-1 flex-col gap-1 p-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <item.icon className="size-4" aria-hidden />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b bg-card/80 px-4 py-3 md:hidden">
          <Brand href={APP_PATHS.ponto} />
          <nav
            aria-label="Navegação móvel"
            className="-mx-1 mt-3 flex gap-1 overflow-x-auto pb-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex flex-1 flex-col p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
