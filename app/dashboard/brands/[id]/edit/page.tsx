import { fetchBrandById } from "@/app/lib/data";
import UpdateBrandForm from "@/app/ui/brands/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const brand = await fetchBrandById(id)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Brands', href: '/dashboard/brands' },
                    {
                        label: 'Update Brand',
                        href: `/dashboard/brands/${id}/update`,
                        active: true,
                    },
                ]} />
            <UpdateBrandForm brand={brand} />
        </main>
    );
}