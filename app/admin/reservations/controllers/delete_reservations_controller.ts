import { HttpContext } from '@adonisjs/core/http'
import { ReservationsRepository } from '#admin/reservations/repositories/reservations_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class DeleteReservationsController {
  constructor(private repository: ReservationsRepository) {}

  async execute({ request, response }: HttpContext) {
    await this.repository.delete(request.param('id'))

    return response.redirect().toRoute('admin.reservations')
  }
}
