import { mysqlTable, serial, varchar, text, mysqlEnum, timestamp } from 'drizzle-orm/mysql-core'

export const users = mysqlTable('users', {
  id: serial().primaryKey(),
  status: mysqlEnum('status', ['active', 'inactive']).default('active').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(), // Unique requires varchar length
  avatar: varchar('avatar', { length: 255 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
})
