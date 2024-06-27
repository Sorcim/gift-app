import { db } from '#core/services/db'

interface StoreBeneficiaryDTO {
  name: string
  enabled: boolean
}

interface UpdateBeneficiaryDTO {
  id: string
  name: string
  enabled: boolean
}

export class BeneficiariesRepository {
  all() {
    return db.selectFrom('beneficiaries').selectAll().orderBy('id').execute()
  }

  onlyEnabled() {
    return db
      .selectFrom('beneficiaries')
      .selectAll()
      .where('enabled', '=', true)
      .orderBy('id')
      .execute()
  }

  create(payload: StoreBeneficiaryDTO) {
    return db
      .insertInto('beneficiaries')
      .values({
        name: payload.name,
        created_at: new Date(),
        updated_at: new Date(),
        enabled: payload.enabled,
      })
      .execute()
  }

  update(payload: UpdateBeneficiaryDTO) {
    return db
      .updateTable('beneficiaries')
      .set({
        name: payload.name,
        enabled: payload.enabled,
        updated_at: new Date(),
      })
      .where('id', '=', payload.id)
      .execute()
  }

  delete(id: string) {
    return db.deleteFrom('beneficiaries').where('id', '=', id).execute()
  }
}
