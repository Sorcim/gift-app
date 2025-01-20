import { useState } from 'react'
import DeleteDialog from '~/app/components/dialogs/delete_dialog'

type DeleteReservationButton = {
  href: string
}
export default function DeleteReservationButton(props: DeleteReservationButton) {
  const { href } = props
  const [open, setOpen] = useState(false)
  const title = 'Supprimer la réservation ?'
  const content =
    'Êtes-vous sûr de vouloir supprimer cette réservation ? Cette action est irréversible.'
  return (
    <>
      <a
        onClick={() => setOpen(true)}
        href="#"
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Supprimer ma reservation
      </a>
      <DeleteDialog href={href} open={open} setOpen={setOpen} content={content} title={title} />
    </>
  )
}
