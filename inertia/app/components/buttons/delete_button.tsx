import { useState } from 'react'
import DeleteDialog from '~/app/components/dialogs/delete_dialog'

type DeleteButtonProps = {
  href: string
}
export default function DeleteButton(props: DeleteButtonProps) {
  const { href } = props
  const [open, setOpen] = useState(false)
  return (
    <>
      <a onClick={() => setOpen(true)} href="#" className="text-red-600 hover:text-red-900">
        Delete
      </a>
      <DeleteDialog href={href} open={open} setOpen={setOpen} />
    </>
  )
}
