import { ReservationsRepository } from '#reservations/repositories/reservations_repository'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class DeleteReservationsController {
  constructor(private reservationsRepository: ReservationsRepository) {}

  async render({ inertia, request }: HttpContext) {
    const { id } = request.params()
    const reservation = await this.reservationsRepository.find(id)
    return inertia.render('reservation', { reservation })
  }

  async execute({ request, response, session }: HttpContext) {
    const { id } = request.params()
    await this.reservationsRepository.delete(id)
    session.flash('notification', {
      type: 'success',
      message: 'Vite, il faut réserver un autre cadeau !',
      title: 'Réservation supprimée',
    })
    response.redirect().toRoute('home')
  }
}
