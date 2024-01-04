import { deleteBrand } from "@/app/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateBrand({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/brands/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteBrand({ id }: { id: string }) {
  const deleteBrandWithId = deleteBrand.bind(null, id);

  return (
    <form action={deleteBrandWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  )
}