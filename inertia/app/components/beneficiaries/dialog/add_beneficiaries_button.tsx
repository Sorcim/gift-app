import { useState } from 'react'
import AddBeneficiariesDialog from '~/app/components/beneficiaries/dialog/add_beneficiaries_dialog'

export default function AddBeneficiariesButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type={'button'}
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add beneficiaries
      </button>
      <AddBeneficiariesDialog open={open} setOpen={setOpen}></AddBeneficiariesDialog>
    </>
  )
}
