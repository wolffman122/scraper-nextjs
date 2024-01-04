import { fetchBrands } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/models/create-form";

export default async function Page() {
  const brands = await fetchBrands();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Models', href: '/dashboard/models' },
          {
            label: 'Create Model',
            href: '/dashboard/models/create',
            active: true,
          },
        ]} />
      <Form brands={brands} />
    </main>
  )
}