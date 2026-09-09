import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  framework: "nextjs",
  buildCommand: "pnpm build",
  crons: [{ path: "/api/cron/expire-tokens", schedule: "15 3 * * *" }],
};
