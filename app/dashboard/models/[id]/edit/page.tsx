import { fetchBrands, fetchModelById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/models/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [model, brands] = await Promise.all([
    fetchModelById(id),
    fetchBrands()
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Models', href: '/dashboard/models' },
          {
            label: 'Edit Model',
            href: `/dashboard/models/${id}/edit`,
            active: true
          },
        ]} />
      <Form model={model} brands={brands} />
    </main>
  );
}