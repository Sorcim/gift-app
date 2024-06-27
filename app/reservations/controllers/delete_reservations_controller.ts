import { ReservationsRepository } from '#reservations/repositories/reservations_repository'
import { HttpContext } from '@adonisjs/core/http'
import { GiftRepository } from '#gifts/repositories/gift_repository'

export default class DeleteReservationsController {
  constructor(
    private repository: ReservationsRepository,
    private giftRepository: GiftRepository
  ) {}

  async render({ inertia, request }: HttpContext) {
    const { id } = request.params()
    const [gift, reservation] = await Promise.all([
      this.giftRepository.findByReservation(id),
      this.repository.find(id),
    ])
    return inertia.render('delete_reservation', { gift, reservation })
  }

  async execute({ request, response, session }: HttpContext) {
    const { id } = request.params()
    await this.repository.delete(id)
    session.flash('notification', {
      type: 'success',
      message: 'Vite, il faut réserver un autre cadeau !',
      title: 'Réservation supprimée',
    })
    response.redirect().toRoute('home')
  }
}
