import { db } from '#core/services/db'

export interface ReservationWithDetails {
  reservation_id: string
  reserved_by: string
  gift_name: string
  beneficiary_name: string
}

export class ReservationsRepository {
  async all() {
    return db
      .selectFrom('reservations')
      .innerJoin('gifts', 'reservations.gift_id', 'gifts.id')
      .innerJoin('beneficiaries', 'gifts.beneficiary_id', 'beneficiaries.id')
      .select([
        'reservations.id as reservation_id',
        'reserved_by',
        'beneficiaries.name as beneficiary_name',
        'gifts.name as gift_name',
      ])
      .execute()
  }
  async delete(id: string) {
    return db.deleteFrom('reservations').where('id', '=', id).execute()
  }
}
