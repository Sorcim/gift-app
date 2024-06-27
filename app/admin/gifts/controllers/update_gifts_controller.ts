import vine from '@vinejs/vine'
import { GiftsRepository } from '#admin/gifts/repositories/gifts_repository'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class UpdateGiftsController {
  static validator = vine.compile(
    vine.object({
      name: vine.string().trim(),
      description: vine.string().trim(),
      price: vine.string(),
      image: vine.string().trim(),
      link: vine.string().trim(),
      beneficiary: vine.string().trim(),
    })
  )

  constructor(private repository: GiftsRepository) {}

  async execute({ request, response }: HttpContext) {
    const { name, description, price, image, link, beneficiary } = await request.validateUsing(
      UpdateGiftsController.validator
    )
    await this.repository.update({
      id: request.param('id'),
      name: name,
      description: description,
      price: price,
      image: image,
      link: link,
      beneficiary_id: beneficiary,
    })

    return response.redirect().toRoute('admin.gifts')
  }
}
