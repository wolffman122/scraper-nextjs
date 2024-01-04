import { updateBrand } from "@/app/lib/actions";
import { BrandForm } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "../button";

export default function UpdateBrandForm({ brand }: { brand: BrandForm }) {
  const updateBrandWithId = updateBrand.bind(null, brand.id);

  return (
    <form action={updateBrandWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Brand Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Edit Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={brand.name}
                placeholder="Enter name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
            </div>
          </div>
        </div>

        {/* Website */}
        <div className="mb-4">
          <label htmlFor="website" className="mb-2 block text-sm font-medium">
            Edit Website
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="website"
                name="website"
                type="text"
                defaultValue={brand.website}
                placeholder="Enter website"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/brands"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
            Cancel
          </Link>
          <Button type="submit">Edit Brand</Button>
        </div>
      </div>
    </form>
  )
}