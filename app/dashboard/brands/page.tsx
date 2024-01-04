import BrandsTable from "@/app/ui/brands/table";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Brands', href: '/dashboard/brands', active: true },
                ]} />
            <BrandsTable />
        </main>
    );
}