import CreateBrandForm from "@/app/ui/brands/create-brand-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Brands', href: '/dashboard/brands' },
                    {
                        label: 'Create Brand',
                        href: '/dashboard/brands/create',
                        active: true,
                    },
                ]} />
            <CreateBrandForm />
        </main>
    );
}