import { ModelsWithPH } from "@/app/lib/definitions";
import { Table } from "@radix-ui/themes";
import { CollapsibleTableRows } from "./collapsableTableRows";

type Props = { models: ModelsWithPH[] };

export function PriceHistoryTable({ models }: Props) {
  console.log(models);
  return (
    <div>
      <Table.Root className="max-w-lg" variant="surface" size={"3"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Model Number</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Current Price</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <CollapsibleTableRows models={models} />
        </Table.Body>
      </Table.Root>
    </div>
  )
}