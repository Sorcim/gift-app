import { db } from '#core/services/db'

export class BeneficiariesRepository {
  all() {
    return db
      .selectFrom('beneficiaries')
      .selectAll()
      .where('enabled', '=', true)
      .orderBy('id')
      .execute()
  }

  find(id: string) {
    return db.selectFrom('beneficiaries').selectAll().where('id', '=', id).executeTakeFirst()
  }

  findByGiftId(giftId: string) {
    return db
      .selectFrom('beneficiaries')
      .selectAll()
      .innerJoin('gifts', 'gifts.beneficiary_id', 'beneficiaries.id')
      .where('gifts.id', '=', giftId)
      .execute()
  }
}
