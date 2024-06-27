import DashboardLayout from '~/app/components/dashboard_layout'
import AddBeneficiariesButton from '~/app/components/beneficiaries/dialog/add_beneficiaries_button'
import EditBeneficiariesButton from '~/app/components/beneficiaries/dialog/edit_beneficiaries_button'
import type { Beneficiary } from '#types/common'
import DeleteButton from '~/app/components/buttons/delete_button'

type BeneficiariesListProps = {
  beneficiaries: Beneficiary[]
}
export default function BeneficiariesPage(props: BeneficiariesListProps) {
  const title = 'Beneficiaries'
  const { beneficiaries } = props
  return (
    <DashboardLayout title={title}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Beneficiaries</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the beneficiaries in the app.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <AddBeneficiariesButton />
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
                  enable
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {beneficiaries.map((person) => (
                <tr key={person.name}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {person.name}
                  </td>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {person.enabled ? 'Yes' : 'No'}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <EditBeneficiariesButton beneficiary={person} /> |{' '}
                    <DeleteButton href={`/admin/beneficiaries/${person.id}`} />
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
