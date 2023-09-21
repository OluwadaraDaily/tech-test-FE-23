import { Payout } from "../../service/payouts/types";
import { Column } from "../../types/table";
import Status from "../status";
import { TableWrapper } from "./index.style"

interface Props {
  columns: Column[];
  rows: any[] | undefined;

}

const Table = ({ rows, columns }: Props) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {rows?.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <td key={`${rowIndex}-${columnIndex}`}>{row[column.key]}</td>
          ))}
          <Status status="paid"/>
        </tr>
      ))}
      </tbody>
    </TableWrapper>
  )
};

export default Table;