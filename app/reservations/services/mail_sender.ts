import mail from '@adonisjs/mail/services/main'
import router from '@adonisjs/core/services/router'
import env from '#start/env'

export class MailSender {
  async sendSuccessMail(email: string, data: any) {
    const { gift, beneficiary, reservation } = data
    const url = router
      .builder()
      .prefixUrl(env.get('APP_URL'))
      .params([reservation.id])
      .make('reservation.delete')
    await mail.sendLater((message) => {
      message
        .to(email)
        .from('kdo@app.pesquer.fr')
        .subject('Réservation confirmée')
        .htmlView('emails/success_reservation', {
          gift,
          beneficiary,
          url,
        })
    })
  }
}
