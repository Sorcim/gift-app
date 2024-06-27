import { GiftRepository } from '#gifts/repositories/gift_repository'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { BeneficiariesRepository } from '#gifts/repositories/beneficiaries_repository'

@inject()
export default class ListGiftController {
  constructor(
    private repository: GiftRepository,
    private beneficiariesRepository: BeneficiariesRepository
  ) {}

  async render({ inertia }: HttpContext) {
    const [gifts, beneficiaries] = await Promise.all([
      this.repository.allNotReserved(),
      this.beneficiariesRepository.all(),
    ])
    return inertia.render('home', { gifts, beneficiaries })
  }
}
