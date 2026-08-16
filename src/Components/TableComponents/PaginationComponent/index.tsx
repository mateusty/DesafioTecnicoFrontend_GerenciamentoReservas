import Form from "react-bootstrap/Form";

import { PaginationStyle } from "./style";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdLastPage,
  MdFirstPage,
} from "react-icons/md";
import type { PaginationComponentProps } from "../../../types/componentProps";

function PaginationComponent({ selectedValue, setSelectedValue, totalItems, totalPages, currentPage, changePage}: PaginationComponentProps) {
  return (
    <PaginationStyle>
      <Form.Select className="select-per-page" value={selectedValue} onChange={(e) => setSelectedValue(Number(e.target.value))} aria-label="Quantidade por página">
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </Form.Select>
      <div>
        <span>Total de registros: {totalItems}</span>
      </div>
      <div className="area-paginacao">
        <button onClick={() => changePage(1)} disabled={currentPage == 1 ? true : false} aria-label="Primeira Página">
          <MdFirstPage/>
        </button>
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage == 1 ? true : false} aria-label="Voltar Página">
          <MdNavigateBefore/>
        </button>
        <div>
          <span>{currentPage} de {totalPages}</span>
        </div>
        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage == totalPages ? true : false} aria-label="Próxima Página">
          <MdNavigateNext/>
        </button>
        <button onClick={() => changePage(totalPages)} disabled={currentPage == totalPages ? true : false} aria-label="Última Página">
          <MdLastPage/>
        </button>
      </div>
    </PaginationStyle>
  );
}

export default PaginationComponent;