import { updateModel } from "@/app/lib/actions";
import { BrandField, ModelForm } from "@/app/lib/definitions";
import { CpuChipIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../button";

export default function Form({
  model,
  brands,
}: {
  model: ModelForm;
  brands: BrandField[];
}) {
  const updateModelWithId = updateModel.bind(null, model.id);

  return (
    <form action={updateModelWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Brand Name */}
        <div className="mb-4">
          <label htmlFor="brand" className="mb-2 block text-sm font-medium">
            Choose brand
          </label>
          <div className="relative">
            <select
              id="brand"
              name="brandId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={model.brandId}
            >
              <option value="" disabled>
                Select a brand
              </option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
            <CpuChipIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Model Number */}
        <div className="mb-4">
          <label htmlFor="modelNumber" className="mb-2 block text-sm font-medium">
            Enter a model number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="modelNumber"
                name="modelNumber"
                type="text"
                defaultValue={model.modelNumber}
                placeholder="Enter a model number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Size  */}
        <div className="mb-4">
          <label htmlFor="size" className="mb-2 block text-sm font-medium">
            Enter a size
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="size"
                name="size"
                type="text"
                defaultValue={model.size}
                placeholder="Enter a size"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Link */}
        <div className="mb-4">
          <label htmlFor="link" className="mb-2 block text-sm font-medium">
            Enter a link
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="link"
                name="link"
                type="url"
                defaultValue={model.link}
                placeholder="Enter a link"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Scraper code */}
        <div className="mb-4">
          <label htmlFor="scraperCode" className="mb-2 block text-sm font-medium">
            Enter a scraper code
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="scraperCode"
                name="scraperCode"
                type="text"
                defaultValue={model.scraperCode}
                placeholder="Enter a scraper code"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/models"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Model</Button>
      </div>
    </form>
  )
}