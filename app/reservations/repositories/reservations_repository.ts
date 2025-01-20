import { db } from '#core/services/db'

type StoreReservationDTO = {
  gift_id: string
  reserved_by: string
}

export class ReservationsRepository {
  async find(id: string) {
    return db
      .selectFrom('reservations')
      .innerJoin('gifts', 'reservations.gift_id', 'gifts.id')
      .innerJoin('beneficiaries', 'gifts.beneficiary_id', 'beneficiaries.id')
      .where('reservations.id', '=', id)
      .select([
        'reservations.id as reservation_id',
        'reserved_by',
        'beneficiaries.name as beneficiary_name',
        'gifts.name as gift_name',
        'gifts.description as gift_description',
        'gifts.image as gift_image',
        'gifts.link as gift_link',
        'gifts.price as gift_price',
      ])
      .executeTakeFirst()
  }

  async store(payload: StoreReservationDTO) {
    return db
      .insertInto('reservations')
      .values({
        gift_id: payload.gift_id,
        reserved_by: payload.reserved_by,
        created_at: new Date(),
        updated_at: new Date(),
      })
      .returning(['id', 'gift_id', 'reserved_by'])
      .executeTakeFirst()
  }

  async delete(id: string) {
    return db.deleteFrom('reservations').where('id', '=', id).execute()
  }
}
