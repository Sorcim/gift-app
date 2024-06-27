import DefaultDialog from '~/app/components/dialogs/default'
import { FormEvent } from 'react'
import { useForm } from '@inertiajs/react'
import { Switch } from '@headlessui/react'

export default function AddBeneficiariesDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const { post, data, setData } = useForm({ name: '', enabled: true })
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    post('/admin/beneficiaries', {
      onSuccess: () => {
        setOpen(false)
      },
    })
  }

  function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <DefaultDialog setOpen={setOpen} open={open}>
      <div className="bg-white sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Add a beneficiaries</h3>
          <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Bob"
              />
            </div>
            <Switch
              checked={data.enabled}
              onChange={() => {
                setData('enabled', !data.enabled)
              }}
              className={classNames(
                data.enabled ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  data.enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </DefaultDialog>
  )
}
