import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { ReservationsRepository } from '#admin/reservations/repositories/reservations_repository'

@inject()
export default class ListReservationsController {
  constructor(private repository: ReservationsRepository) {}

  async render({ inertia }: HttpContext) {
    const reservations = await this.repository.all()
    return inertia.render('admin/reservations', { reservations })
  }
}
