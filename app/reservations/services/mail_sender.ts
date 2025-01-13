import mail from '@adonisjs/mail/services/main'

export class MailSender {
  async sendSuccessMail(email: string, data: any) {
    const { gift, beneficiary, reservation } = data
    await mail.sendLater((message) => {
      message
        .to(email)
        .from('kdo@app.pesquer.fr')
        .subject('Réservation confirmée')
        .htmlView('emails/success_reservation', {
          gift,
          beneficiary: beneficiary[0],
          reservation: reservation[0],
        })
    })
  }
}
