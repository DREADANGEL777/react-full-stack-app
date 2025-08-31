import { pgTable, serial, varchar, integer, timestamp } from "drizzle-orm/pg-core"

export const Ideas = pgTable("ideas", {
  id: serial("id").primaryKey(),
  content: varchar("content", { length: 500 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  vote: integer("vote").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})
