import { useState } from 'react'
import EditBeneficiariesDialog from '~/app/components/beneficiaries/dialog/edit_beneficiaries_dialog'
import type { Beneficiary } from '#types/common'

interface EditBeneficiariesButtonProps {
  beneficiary: Beneficiary
}

export default function EditBeneficiariesButton(props: EditBeneficiariesButtonProps) {
  const [open, setOpen] = useState(false)
  const { beneficiary } = props
  return (
    <>
      <a onClick={() => setOpen(true)} href="#" className="text-indigo-600 hover:text-indigo-900">
        Edit
      </a>
      <EditBeneficiariesDialog
        beneficiary={beneficiary}
        open={open}
        setOpen={setOpen}
      ></EditBeneficiariesDialog>
    </>
  )
}
