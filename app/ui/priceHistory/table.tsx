'use client';

import { ModelsWithPH } from "@/app/lib/definitions";
import { Table, TableCell } from "@radix-ui/themes";
import * as Collapsible from '@radix-ui/react-collapsible';

type Props = { models: ModelsWithPH[] };

export function PriceHistoryTable({ models }: Props) {
    
    return (    
      <div>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Model Number</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Size</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>cacheSize</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>History</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              models?.map((model) => (
                <Collapsible.Root className="CollapsibleRoot" key={model.id} asChild>
                  <>
                    <Table.Row align={"center"}>
                      <Table.Cell>{model.modelNumber}</Table.Cell>
                      <Table.Cell>{model.size}</Table.Cell>
                      <Table.Cell>{model.cacheSize}</Table.Cell>
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
            }
          </Table.Body>
        </Table.Root>
      </div>
    )
}