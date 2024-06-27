import { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {
  async execute({ inertia, auth }: HttpContext) {
    await auth.use('web').logout()
    return inertia.render('admin/login')
  }
}
