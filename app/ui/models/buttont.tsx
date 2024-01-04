import { deleteModel } from "@/app/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateModel({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/models/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-5" />
    </Link>
  )
}

export function DeleteModel({ id }: { id: string }) {
  const deleteModelWithId = deleteModel.bind(null, id);

  return (
    <form action={deleteModelWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  )
}