import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { ReservationsRepository } from '../repositories/reservations_repository.js'
import vine from '@vinejs/vine'
import { MailSender } from '../services/mail_sender.js'
import { GiftRepository } from '#gifts/repositories/gift_repository'
import { BeneficiariesRepository } from '#gifts/repositories/beneficiaries_repository'

@inject()
export default class StoreReservationsController {
  static validator = vine.compile(
    vine.object({
      email: vine.string().trim().email(),
    })
  )

  constructor(
    private repository: ReservationsRepository,
    private giftRepository: GiftRepository,
    private beneficiariesRepository: BeneficiariesRepository,
    private mailSender: MailSender
  ) {}

  async execute({ request, response, session }: HttpContext) {
    const { email } = await request.validateUsing(StoreReservationsController.validator)
    const { id } = request.params()
    const [gift, beneficiary] = await Promise.all([
      this.giftRepository.find(id),
      this.beneficiariesRepository.findByGiftId(id),
    ])
    try {
      const reservation = await this.repository.store({ gift_id: id, reserved_by: email })
      await this.mailSender.sendSuccessMail(email, {
        gift,
        beneficiary,
        reservation,
      })
    } catch (e) {
      return response.badRequest(e.message)
    }
    session.flash('notification', {
      title: 'Réservation sauvegardé',
      message: 'Merci pour votre réservation !',
    })
    return response.redirect().toRoute('home')
  }
}
