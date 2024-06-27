import vine from '@vinejs/vine'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { GiftsRepository } from '#admin/gifts/repositories/gifts_repository'

@inject()
export default class StoreGiftsController {
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
      StoreGiftsController.validator
    )
    await this.repository.create({
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
