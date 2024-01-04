import Link from "next/link";
import { Button } from "../button";
import { createBrand } from "@/app/lib/actions";

export default function CreateBrandForm() {
    return (
        <form action={createBrand}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Brand Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Enter a brand name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Website */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Enter Webiste
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="website"
                                name="website"
                                type="website"
                                placeholder="Website"
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
                    <Button type="submit">Create Brand</Button>
                </div>
            </div>
        </form>
    )
}