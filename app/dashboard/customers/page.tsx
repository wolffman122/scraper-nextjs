import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default async function Page() {
    const customers = await fetchFilteredCustomers("");

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Customers', href: '/dashboard/customers', active: true },
                ]} />
            <CustomersTable customers={customers} />

        </main>
    );
}