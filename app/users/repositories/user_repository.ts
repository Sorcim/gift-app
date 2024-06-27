import { db } from '#core/services/db'

export class UserRepository {
  all() {
    return db.selectFrom('users').execute()
  }

  find(id: string) {
    return db.selectFrom('users').where('id', '=', id).executeTakeFirst()
  }

  findUserByEmail(email: string) {
    return db.selectFrom('users').selectAll().where('email', '=', email).executeTakeFirst()
  }
}
