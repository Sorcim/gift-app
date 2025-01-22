import { db } from '#core/services/db'
import { sql } from 'kysely'

export class GiftRepository {
  all() {
    return db.selectFrom('gifts').execute()
  }

  allNotReserved() {
    return db
      .selectFrom('gifts')
      .select([
        'gifts.id',
        'gifts.name',
        'gifts.description',
        'gifts.price',
        'gifts.image',
        'gifts.beneficiary_id',
      ])
      .leftJoin('reservations', 'gifts.id', 'reservations.gift_id')
      .innerJoin('beneficiaries', 'gifts.beneficiary_id', 'beneficiaries.id')
      .where('reservations.gift_id', 'is', null)
      .where('beneficiaries.enabled', '=', true)
      .execute()
  }

  find(id: string) {
    return db
      .selectFrom('gifts')
      .leftJoin('reservations', 'gifts.id', 'reservations.gift_id')
      .select([
        'gifts.id',
        'gifts.name',
        'gifts.description',
        'gifts.price',
        'gifts.image',
        'gifts.beneficiary_id',
        sql<boolean>`CASE WHEN reservations.id IS NOT NULL THEN TRUE ELSE FALSE END`.as(
          'has_reservation'
        ),
      ])
      .where('gifts.id', '=', id)
      .executeTakeFirst()
  }
}
