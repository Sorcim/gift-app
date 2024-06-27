import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { db } from '#core/services/db'
import hash from '@adonisjs/core/services/hash'

export default class CreateUser extends BaseCommand {
  static commandName = 'create:user'
  static description = 'Create one user'

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    const email = await this.prompt.ask('Enter email')
    const password = await this.prompt.secure('Enter password')

    await db
      .insertInto('users')
      .values({
        email: email,
        password: await hash.make(password),
        created_at: new Date(),
        updated_at: new Date(),
      })
      .execute()

    this.logger.success('User created successfully!')
    return
  }
}
