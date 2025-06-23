import { AppSidebar } from '@/Components/AppSidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/Components/ui/breadcrumb'
import { Separator } from '@/Components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/Components/ui/sidebar'
import { DashboardBreadcrumbs } from '@/types/dashboard-breadcrumb.type'
import { Head } from '@inertiajs/react'
import React, { PropsWithChildren } from 'react'

export default function Authenticated({
  children,
  breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: DashboardBreadcrumbs }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Head title="Dashboard" />
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {breadcrumbs.length > 0 && (
              <>
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumbs.map(({ label, href }, index) => (
                      <React.Fragment key={label}>
                        <BreadcrumbItem className="hidden md:block">
                          {index === breadcrumbs.length - 1 ? (
                            <BreadcrumbPage>{label}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {index !== breadcrumbs.length - 1 && (
                          <BreadcrumbSeparator className="hidden md:block" />
                        )}
                      </React.Fragment>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </>
            )}
          </div>
        </header>
        <main className="p-4 pt-0">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
