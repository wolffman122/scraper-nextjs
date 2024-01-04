import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import ModelsTable from "@/app/ui/models/table";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Models', href: '/dashboard/models', active: true },
        ]} />
      <ModelsTable query="" currentPage={1} />
    </main>
  )
}