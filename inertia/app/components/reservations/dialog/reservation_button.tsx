import ReservationDialog from '~/app/components/reservations/dialog/reservation_dialog'
import { useState } from 'react'

type ReservationButtonProps = {
  giftId: string
  hasReservation: boolean
}
export default function ReservationButton(props: ReservationButtonProps) {
  const [open, setOpen] = useState(false)
  const { giftId, hasReservation } = props
  return (
    <>
      <button
        disabled={hasReservation}
        onClick={() => setOpen(true)}
        type={'button'}
        className={`flex w-full items-center justify-center rounded-md border px-8 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 ${
          hasReservation
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' // Styles pour un bouton désactivé
            : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500' // Styles pour un bouton actif
        }`}
      >
        {hasReservation ? `Déjà réservé` : `Réserver`}
      </button>
      <ReservationDialog open={open} setOpen={setOpen} giftId={giftId}></ReservationDialog>
    </>
  )
}
