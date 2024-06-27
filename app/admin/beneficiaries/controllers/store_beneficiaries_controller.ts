import { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import { inject } from '@adonisjs/core'
import { BeneficiariesRepository } from '#admin/beneficiaries/repositories/beneficiaries_repository'

@inject()
export default class StoreBeneficiariesController {
  static validator = vine.compile(
    vine.object({
      name: vine.string().trim(),
      enabled: vine.boolean(),
    })
  )

  constructor(private repository: BeneficiariesRepository) {}

  async execute({ request, response }: HttpContext) {
    const { name, enabled } = await request.validateUsing(StoreBeneficiariesController.validator)
    await this.repository.create({ name: name, enabled: enabled })

    return response.redirect().toRoute('admin.beneficiaries')
  }
}
