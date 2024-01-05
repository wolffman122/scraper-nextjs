import { fetchModelsByBrandId } from "@/app/lib/data";
import { BrandField, ModelField } from "@/app/lib/definitions";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import React, { useState } from "react";


export default async function Form({ brands }: { brands: BrandField[] }) {
  const [ selected, setSelected] = useState('');

  const changeSelectOptionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  }

  const models = await fetchModelsByBrandId(selected);

  return (
    <form>
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
              defaultValue=""
              onChange={changeSelectOptionHandler}>
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

        {/* Model Name */}
        <div className="mb-4">
          <label htmlFor="model" className="mb-2 block text-sm font-medium">
            Choose model
          </label>
          <div className="relative">
            <select
              id="model"
              name="modelId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="">
              <option value="" disabled>
                Select a model
              </option>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.modelNumber}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
    </form>
  )
}