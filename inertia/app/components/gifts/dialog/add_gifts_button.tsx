import { useState } from 'react'
import AddGiftsDialog from '~/app/components/gifts/dialog/add_gifts_dialog'
import type { Beneficiary } from '#types/common'

type AddGiftsButtonProps = {
  beneficiaries: Beneficiary[]
}

export default function AddGiftsButton(props: AddGiftsButtonProps) {
  const { beneficiaries } = props
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type={'button'}
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add gift
      </button>
      <AddGiftsDialog open={open} setOpen={setOpen} beneficiaries={beneficiaries}></AddGiftsDialog>
    </>
  )
}
