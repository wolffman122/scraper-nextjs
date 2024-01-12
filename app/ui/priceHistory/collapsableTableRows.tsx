"use client";

import { ModelsWithPH } from "@/app/lib/definitions";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Table } from "@radix-ui/themes";
import clsx from "clsx";

type Props = { models: ModelsWithPH[] };

export function CollapsibleTableRows({ models }: Props) {
  return (
    models?.map((model) => (
      <Collapsible.Root className="CollapsibleRoot" key={model.id} asChild>
        <>
          <Table.Row align={"center"}>
            <Table.Cell>{model.modelNumber}</Table.Cell>
            <Table.Cell>{model.size}</Table.Cell>
            <Table.Cell>
              <Collapsible.Trigger asChild>
                {/* <button className="IconButton">Open</button> */}
                <div className={clsx(
                  'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
                )}>{model.currentPrice}</div>
              </Collapsible.Trigger>
            </Table.Cell>
          </Table.Row>
          <Collapsible.Content asChild>
            <>
              {model.priceHistory.map((ph) => (
                <Table.Row key={ph.id}>
                  <Table.Cell>{ph.price}</Table.Cell>
                  <Table.Cell>{ph.createdAt.toISOString().split('T')[0]}</Table.Cell>
                </Table.Row>
              ))}
            </>
          </Collapsible.Content>
        </>
      </Collapsible.Root>
    ))
  )
}