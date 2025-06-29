import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import MasterLayout from '@/Layouts/MasterLayout'
import { DashboardBreadcrumbs } from '@/types/dashboard-breadcrumb.type'
import React, { ReactNode } from 'react'

const Dashboard = (): React.JSX.Element => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>This is the dashboard page.</p>
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

Dashboard.layout = (page: ReactNode): ReactNode => (
  <MasterLayout>
    <AuthenticatedLayout breadcrumbs={breadcrumbs}>{page}</AuthenticatedLayout>
  </MasterLayout>
)

export default Dashboard
