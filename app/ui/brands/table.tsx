import { fetchBrands } from "@/app/lib/data";
import { DeleteBrand, UpdateBrand } from "./buttons";
import Link from "next/link";
import clsx from "clsx";

export default async function BrandsTable() {

    const brands = await fetchBrands();

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {brands?.map((brand) => (
                            <div
                                key={brand.id}
                                className="mb-2 w-full rounded-md bg-white p-4">
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{brand.name}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">{brand.website}</p>
                                    </div>
                                    <div className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                                        <UpdateBrand id={brand.id} />
                                        <DeleteBrand id={brand.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Website
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {brands?.map((brand) => (
                                <tr
                                    key={brand.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                    <td className="whitespace-nonwrap py-3 pl-6 pr-3">
                                        <div className="flex items-center gap-3">
                                            <p>{brand.name}</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {brand.website}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {brand.createdAt.toISOString()}
                                    </td>
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex justify-end gap-3">
                                            <UpdateBrand id={brand.id} />
                                            <DeleteBrand id={brand.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 flex justify-end gap-4">
                      <Link
                        href="/dashboard/brands/create"
                        className={clsx(
                          'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'                          
                        )}>
                        Create Brand
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}