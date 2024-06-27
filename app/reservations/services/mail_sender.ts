import mail from '@adonisjs/mail/services/main'

export class MailSender {
  async sendSuccessMail(email: string, data: any) {
    const response = await mail.sendLater((message) => {
      message
        .to(email)
        .from('kdo@pesquer.fr')
        .subject('Réservation confirmée')
        .htmlView('emails/success_reservation', data)
    })
    console.log(response)
  }
}
