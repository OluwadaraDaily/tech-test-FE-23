import { Payout } from "../../service/payouts/types";
import { Column } from "../../types/table";
import Status from "../status";
import { TableWrapper } from "./index.style"
import { useReactTable, ColumnDef, flexRender, getCoreRowModel } from '@tanstack/react-table'
import { useMemo } from 'react';


interface Props {
  columns: ColumnDef<Payout>[];
  rows: Payout[];
}

const Table = ({ rows, columns }: Props) => {
  
  const data = useMemo(() => rows, [rows])
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <TableWrapper cellSpacing={0}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  )
};

export default Table;