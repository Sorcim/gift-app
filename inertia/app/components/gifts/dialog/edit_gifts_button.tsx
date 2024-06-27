import { useState } from 'react'
import EditGiftsDialog from '~/app/components/gifts/dialog/edit_gifts_dialog'
import { Beneficiary, Gift } from '#types/common'

interface EditGiftsButtonProps {
  gift: Gift
  beneficiaries: Beneficiary[]
}

export default function EditGiftsButton(props: EditGiftsButtonProps) {
  const [open, setOpen] = useState(false)
  const { gift, beneficiaries } = props
  return (
    <>
      <a onClick={() => setOpen(true)} href="#" className="text-indigo-600 hover:text-indigo-900">
        Edit
      </a>
      <EditGiftsDialog
        gift={gift}
        open={open}
        setOpen={setOpen}
        beneficiaries={beneficiaries}
      ></EditGiftsDialog>
    </>
  )
}
