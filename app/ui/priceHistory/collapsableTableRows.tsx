"use client";

import { ModelsWithPH } from "@/app/lib/definitions";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Table } from "@radix-ui/themes";

type Props = { models: ModelsWithPH[] };

export function CollapsibleTableRows({ models }: Props) {
  return (
    models?.map((model) => (
      <Collapsible.Root className="CollapsibleRoot" key={model.id} asChild>
        <>
          <Table.Row align={"center"}>
            <Table.Cell>{model.modelNumber}</Table.Cell>
            <Table.Cell>{model.size}</Table.Cell>
            <Table.Cell>{model.currentPrice}</Table.Cell>
            <Table.Cell>
              <Collapsible.Trigger asChild>
                <button className="IconButton">Open</button>
              </Collapsible.Trigger>
            </Table.Cell>
          </Table.Row>
          <Collapsible.Content asChild>
            <>
            {model.priceHistory.map((ph) => (
              <Table.Row key={ph.id}>
                <Table.Cell>{ph.price}</Table.Cell>
                <Table.Cell>{ph.createdAt.toISOString()}</Table.Cell>
              </Table.Row>
            ))}
            </>
          </Collapsible.Content>
        </>
      </Collapsible.Root>
    ))
  )
}