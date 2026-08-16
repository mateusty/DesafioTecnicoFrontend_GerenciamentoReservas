import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { AiOutlineSearch } from "react-icons/ai";
import { SearchStyle } from "./style";

function SearchComponent() {
  return (
    <SearchStyle>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <AiOutlineSearch />
        </InputGroup.Text>
        <Form.Control placeholder="Filtro por qualquer coluna da tabela..." />
      </InputGroup>
    </SearchStyle>
  );
}

export default SearchComponent;