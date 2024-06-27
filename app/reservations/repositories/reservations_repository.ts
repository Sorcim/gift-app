import { db } from '#core/services/db'

type StoreReservationDTO = {
  gift_id: string
  reserved_by: string
}

export class ReservationsRepository {
  async find(id: string) {
    return db.selectFrom('reservations').selectAll().where('id', '=', id).execute()
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
      .execute()
  }

  async delete(gift_id: string) {
    return db.deleteFrom('reservations').where('gift_id', '=', gift_id).execute()
  }
}
