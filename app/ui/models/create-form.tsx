import { createModel } from "@/app/lib/actions";
import { BrandField } from "@/app/lib/definitions";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../button";

export default function Form({ brands }: { brands: BrandField[] }) {
  return (
    <form action={createModel}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Brand */}
        <div className="mb-4">
          <label htmlFor="brand" className="mb-2 block text-sm font-medium">
            Choose brand
          </label>
          <div className="relative">
            <select
              id="brand"
              name="brandId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="">
              <option value="" disabled>
                Select a brand
              </option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Model Number */}
        <div className="mb-4">
          <label htmlFor="modelNumber" className="mb-2 block text-sm font-medium">
            Enter Model Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="modelNimber"
                name="modelNumber"
                type="text"
                placeholder="Enter model number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Size */}
        <div className="mb-4">
          <label htmlFor="size" className="mb-2 block text-sm font-medium">
            Enter size
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="size"
                name="size"
                type="text"
                placeholder="Enter size"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Link */}
        <div className="mb-4">
          <label htmlFor="link" className="mb-2 block text-sm font-medium">
            Enter link
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="link"
                name="link"
                type="text"
                placeholder="Enter link"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Scraper Code */}
        <div className="mb-4">
          <label htmlFor="scraperCode" className="mb-2 block text-sm font-medium">
            Enter scraper code
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="scraperCode"
                name="scraperCode"
                type="text"
                placeholder="Enter scraper code"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href='/dashboard/models'
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
          Cancel
        </Link>
        <Button type="submit">Create Model</Button>
      </div>
    </form>
  );
}