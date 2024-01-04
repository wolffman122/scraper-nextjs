import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import InvoicesTable from "@/app/ui/invoices/table";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/customers', active: true },
        ]} />
      <InvoicesTable query="" currentPage={1} />
    </main>
  )
}