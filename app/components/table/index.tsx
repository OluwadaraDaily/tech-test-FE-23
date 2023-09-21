import Status from "../status";
import { TableWrapper } from "./index.style"

interface Props {
  columns: string[];
  rows: any[];

}

const Table = ({ rows, columns }: Props) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <td key={`${rowIndex}-${columnIndex}`}>{row[column]}</td>
          ))}
          <Status status="paid"/>
        </tr>
      ))}
      </tbody>
    </TableWrapper>
  )
};

export default Table;