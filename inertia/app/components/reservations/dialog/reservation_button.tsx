import ReservationDialog from '~/app/components/reservations/dialog/reservation_dialog'
import { useState } from 'react'

type ReservationButtonProps = {
  giftId: string
}
export default function ReservationButton(props: ReservationButtonProps) {
  const [open, setOpen] = useState(false)
  const { giftId } = props
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type={'button'}
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Réserver
      </button>
      <ReservationDialog open={open} setOpen={setOpen} giftId={giftId}></ReservationDialog>
    </>
  )
}
