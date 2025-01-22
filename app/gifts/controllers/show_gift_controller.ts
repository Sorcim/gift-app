import { GiftRepository } from '#gifts/repositories/gift_repository'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { BeneficiariesRepository } from '#gifts/repositories/beneficiaries_repository'

@inject()
export default class ShowGiftController {
  constructor(
    private giftRepository: GiftRepository,
    private beneficiariesRepository: BeneficiariesRepository
  ) {}

  async render({ inertia, request }: HttpContext) {
    const { id } = request.params()
    const [gift, beneficiary] = await Promise.all([
      this.giftRepository.find(id),
      this.beneficiariesRepository.findByGiftId(id),
    ])
    return inertia.render('gift', { gift, beneficiary })
  }
}
