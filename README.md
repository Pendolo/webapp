# Pendolo webapp

SaaS web de controle de ponto para pequenas equipes. Stack: Next.js (App Router), TypeScript, Tailwind, shadcn/ui, Drizzle, Supabase Postgres, Vercel.

Repositório: [github.com/Pendolo/webapp](https://github.com/Pendolo/webapp)

## Requisitos

- Node.js 20+
- pnpm 11+
- Projeto Supabase (Postgres) para persistência

## Setup local

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Preencha `DATABASE_URL` e os demais secrets em `.env.local` antes de migrations ou autenticação.

## Scripts

| Script | Uso |
|---|---|
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm test` | Testes de domínio (Vitest) |
| `pnpm lint` | ESLint |
| `pnpm db:generate` | Gerar migrations Drizzle |
| `pnpm db:migrate` | Aplicar migrations |

## Estrutura

```text
app/(public)     login, cadastro, convite, reset
app/(app)        área autenticada (ponto, cartão-ponto, painel…)
app/api          health e cron
components       UI e shell
domain           regras de jornada, ponto, fechamento e banco de horas
server/auth      sessão, senha e convite (first-party)
server/db        schema e cliente Drizzle
tests            testes de domínio, sem subir o Next.js
```

A autenticação é da aplicação. Não use Clerk nem Supabase Auth.

## Rotas públicas

`/`, `/login`, `/cadastro`, `/convite`, `/recuperar-senha`, `/api/health`

As demais páginas exigem o cookie `pendolo_session` (ainda não emitido; a implementação de auth vem na sequência).
