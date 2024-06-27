import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { BeneficiariesRepository } from '#admin/beneficiaries/repositories/beneficiaries_repository'

@inject()
export default class DeleteBeneficiariesController {
  constructor(private repository: BeneficiariesRepository) {}

  async execute({ request, response }: HttpContext) {
    await this.repository.delete(request.param('id'))

    return response.redirect().toRoute('admin.beneficiaries')
  }
}
