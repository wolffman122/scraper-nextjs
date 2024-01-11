"use client";

import { fetchBrands } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/priceHistory/create-form";

export default async function Page() {
  const brands = await fetchBrands();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {label: 'Price History', href: '/dashboard/priceHistory' },
          {
            label: 'Create Price History',
            href: '/dashboard/priceHistory/create',
            active: true,
          },
      ]} />
      <Form brands={brands} />
    </main>
  )
    
}