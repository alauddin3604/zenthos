import Authenticated from '@/Layouts/AuthenticatedLayout'
import { DashboardBreadcrumbs } from '@/types/dashboard-breadcrumb.type'
import { ReactNode } from 'react'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

const breadcrumbs: DashboardBreadcrumbs = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
  }
]

Dashboard.layout = (page: ReactNode) =>
  <Authenticated children={page} breadcrumbs={breadcrumbs} />

export default Dashboard
