import { Payout } from "../../service/payouts/types";
import { PaginationWrapper, TableWrapper } from "./index.style"
import { useReactTable, ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table'
import { useMemo } from 'react';
import { CaretRightOutlined, FastBackwardOutlined, CaretLeftOutlined, FastForwardOutlined } from '@ant-design/icons';


interface Props {
  columns: ColumnDef<Payout>[];
  rows: Payout[];
}

const Table = ({ rows, columns }: Props) => {
  
  const data = useMemo(() => rows, [rows])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <>
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
      <PaginationWrapper>
        <button
          onClick={() => table.setPageIndex(0)}
        ><FastBackwardOutlined/></button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        ><CaretLeftOutlined /></button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        ><CaretRightOutlined /></button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}><FastForwardOutlined /></button>
      </PaginationWrapper>
    </>
  )
};

export default Table;