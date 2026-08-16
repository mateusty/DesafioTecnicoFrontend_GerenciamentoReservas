import Table from "react-bootstrap/Table";

import { TableStyle } from "./style";
import type { TableComponentProps } from "../../../types/componentProps";

function TableComponent({ columns, children }: TableComponentProps) {
  return (
    <TableStyle>
      <div className="table-area">
        <Table hover striped>
          <thead>
            <tr>
              {columns.map(column => { return <td>{column}</td>})}
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </Table>
      </div>
    </TableStyle>
  );
}

export default TableComponent;