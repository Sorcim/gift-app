import { db } from '#core/services/db'

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
    return db.selectFrom('gifts').selectAll().where('id', '=', id).executeTakeFirst()
  }
}
