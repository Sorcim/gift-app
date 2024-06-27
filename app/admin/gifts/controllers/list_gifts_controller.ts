import { HttpContext } from '@adonisjs/core/http'
import { GiftsRepository } from '#admin/gifts/repositories/gifts_repository'
import { inject } from '@adonisjs/core'
import { BeneficiariesRepository } from '#admin/beneficiaries/repositories/beneficiaries_repository'

@inject()
export default class ListGiftsController {
  constructor(
    private repository: GiftsRepository,
    private beneficiariesRepository: BeneficiariesRepository
  ) {}
  async render({ inertia }: HttpContext) {
    const [gifts, beneficiaries] = await Promise.all([
      this.repository.all(),
      this.beneficiariesRepository.onlyEnabled(),
    ])
    return inertia.render('admin/gifts', { gifts, beneficiaries })
  }
}
