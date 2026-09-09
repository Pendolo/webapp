import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { requireEnv } from "@/server/env";
import * as schema from "@/server/db/schema";

let client: ReturnType<typeof postgres> | undefined;
let db: ReturnType<typeof drizzle<typeof schema>> | undefined;

export function getDb() {
  if (db) {
    return db;
  }

  const databaseUrl = requireEnv("DATABASE_URL");
  client = postgres(databaseUrl, { max: 1, prepare: false });
  db = drizzle(client, { schema });

  return db;
}
