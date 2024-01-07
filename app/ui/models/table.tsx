import { fetchFilteredModels } from "@/app/lib/data";
import Link from "next/link";
import { DeleteModel, UpdateModel } from "./buttont";
import clsx from "clsx";

export default async function ModelsTable({
  query,
  currentPage
}: {
  query: string;
  currentPage: number
}) {
  const models = await fetchFilteredModels(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {models.map((model) => (
              <div
                key={model.id}
                className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{model.modelNumber}</p>
                    </div>
                    <p className="text-sm text-gray-500">{model.link}</p>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">
                        {model.size}
                      </p>
                      <p>{model.scraperCode}</p>
                      <p>{model.cacheSize}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateModel id={model.id} />
                      <DeleteModel id={model.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Brand
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Model Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Link
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Size
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cache Size
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Scraper Code
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {models.map((model) => (
                <tr
                  key={model?.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{model?.brandName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {model?.modelNumber}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Link href={model.link}>Link</Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {model?.size}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {model?.cacheSize}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {model?.scraperCode}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateModel id={model.id} />
                      <DeleteModel id={model.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/models/create"
              className={clsx(
                'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
              )}>
              Create Model
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}