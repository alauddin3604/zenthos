import { PropsWithChildren } from 'react'
import { Toaster } from '@/Components/ui/sonner'
import { usePage } from '@inertiajs/react'
import { toast } from 'sonner'

const MasterLayout = ({ children }: Readonly<PropsWithChildren>) => {
  const props = usePage().props

  if (props.flash.success) {
    toast.success(props.flash.success)
  }

  return (
    <>
      {children}
      <Toaster
        theme="light"
        richColors
      />
    </>
  )
}

export default MasterLayout
