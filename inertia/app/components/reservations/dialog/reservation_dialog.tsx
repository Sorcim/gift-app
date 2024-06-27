import DefaultDialog from '~/app/components/dialogs/default'
import { useForm } from '@inertiajs/react'

type ReservationDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
  giftId: string
}

export default function ReservationDialog(props: ReservationDialogProps) {
  const { data, post, setData } = useForm({ email: '' })
  const { open, setOpen, giftId } = props
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post(`/reservations/${giftId}`, {
      onSuccess: () => {
        setOpen(false)
      },
    })
  }
  return (
    <DefaultDialog setOpen={setOpen} open={open}>
      <div>
        <div className="mt-3 text-center sm:mt-5">
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Pour réserver ce cadeau, veuillez remplir le formulaire ci-dessous. <br />
              Un mail vous sera envoyé avec les informations.
            </p>
          </div>
          <div className="mt-5 sm:mt-6">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Confirmer
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultDialog>
  )
}
