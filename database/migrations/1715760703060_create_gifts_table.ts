import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('gifts')
    .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.notNull())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('description', 'text')
    .addColumn('price', 'text', (col) => col.notNull())
    .addColumn('beneficiary_id', 'uuid', (col) =>
      col.references('beneficiaries.id').onDelete('cascade').notNull()
    )
    .addColumn('image', 'text', (col) => col.notNull())
    .addColumn('link', 'text')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('gifts').execute()
}
