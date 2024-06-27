import { Kysely, sql } from 'kysely'

const tableName = 'beneficiaries'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable(tableName)
    .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.notNull())
    .addColumn('name', 'varchar', (col) => col.notNull().unique())
    .addColumn('enabled', 'boolean', (col) => col.notNull().defaultTo(true))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable(tableName).execute()
}
