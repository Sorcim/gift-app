import { Kysely, PostgresDialect } from 'kysely'
import pg from 'pg'
import type { DB } from '#types/db'
import env from '#start/env'

const { Pool } = pg

const dialect = new PostgresDialect({
  pool: new Pool({
    host: env.get('DB_HOST'),
    port: env.get('DB_PORT'),
    user: env.get('DB_USER'),
    password: env.get('DB_PASSWORD'),
    database: env.get('DB_DATABASE'),
    max: 20,
  }),
})

export const db = new Kysely<DB>({
  dialect,
})
