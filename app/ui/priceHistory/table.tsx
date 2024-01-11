'use client';

import { Model } from "@/app/lib/definitions";
import { Table } from "@radix-ui/themes";
import * as Collapsible from '@radix-ui/react-collapsible';

type Props = { models: Model[] };

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
                      <Table.Row id="Test Row">
                        <Table.Cell>Collapse Test 1</Table.Cell>
                        <Table.Cell>Collapse Test 1</Table.Cell>
                        <Table.Cell>Collapse Test 1</Table.Cell>
                      </Table.Row>
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