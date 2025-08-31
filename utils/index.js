import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from './schema'
const sql = neon(
  "postgresql://neondb_owner:npg_YsUL29xncGdI@ep-raspy-unit-adwt9juv-pooler.c-2.us-east-1.aws.neon.tech/top-20-ideas?sslmode=require&channel_binding=require"
)
export const db = drizzle(sql, {schema})
