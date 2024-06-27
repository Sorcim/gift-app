import { db } from '#core/services/db'

type StoreGiftsDTO = {
  name: string
  description: string
  price: string
  image: string
  link: string
  beneficiary_id: string
}

type UpdateGiftsDTO = {
  id: string
  name: string
  description: string
  price: string
  image: string
  link: string
  beneficiary_id: string
}

export class GiftsRepository {
  all() {
    return db.selectFrom('gifts').selectAll().execute()
  }

  create(payload: StoreGiftsDTO) {
    return db
      .insertInto('gifts')
      .values({
        name: payload.name,
        description: payload.description,
        price: payload.price,
        image: payload.image,
        link: payload.link,
        beneficiary_id: payload.beneficiary_id,
        created_at: new Date(),
        updated_at: new Date(),
      })
      .execute()
  }

  update(payload: UpdateGiftsDTO) {
    return db
      .updateTable('gifts')
      .set({
        name: payload.name,
        description: payload.description,
        price: payload.price,
        image: payload.image,
        link: payload.link,
        beneficiary_id: payload.beneficiary_id,
        updated_at: new Date(),
      })
      .where('id', '=', payload.id)
      .execute()
  }
}
