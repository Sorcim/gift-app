import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { BeneficiariesRepository } from '#admin/beneficiaries/repositories/beneficiaries_repository'

@inject()
export default class ListBeneficiariesController {
  constructor(private repository: BeneficiariesRepository) {}

  async render({ inertia }: HttpContext) {
    const beneficiaries = await this.repository.all()
    return inertia.render('admin/beneficiaries', { beneficiaries: beneficiaries })
  }
}
