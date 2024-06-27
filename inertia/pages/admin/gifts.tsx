import DashboardLayout from '~/app/components/dashboard_layout'
import AddGiftsButton from '~/app/components/gifts/dialog/add_gifts_button'
import EditGiftsButton from '~/app/components/gifts/dialog/edit_gifts_button'
import DeleteButton from '~/app/components/buttons/delete_button'
import type { Beneficiary, Gift } from '#types/common'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

type GiftsListProps = {
  gifts: Gift[]
  beneficiaries: Beneficiary[]
}
export default function GiftsPage(props: GiftsListProps) {
  const title = 'Gifts'
  const { gifts, beneficiaries } = props
  return (
    <DashboardLayout title={title}>
      {beneficiaries.length === 0 && (
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Attention !</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Impossible d'ajouter un cadeau sans bénéficiaire. Veuillez ajouter un
                  bénéficiaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Gifts</h1>
            <p className="mt-2 text-sm text-gray-700">A list of all the gifts in the app.</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            {beneficiaries.length > 0 && <AddGiftsButton beneficiaries={beneficiaries} />}
          </div>
        </div>
        <div className="-mx-4 mt-8 sm:-mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Beneficiary
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {gifts.map((gift) => (
                <tr key={gift.name}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {gift.name}
                  </td>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {gift.price}
                  </td>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {
                      beneficiaries.find((beneficiary) => beneficiary.id === gift.beneficiary_id)
                        ?.name
                    }
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <EditGiftsButton gift={gift} beneficiaries={beneficiaries} /> |{' '}
                    <DeleteButton href={`/admin/gifts/${gift.id}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
