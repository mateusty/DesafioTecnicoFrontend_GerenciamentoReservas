import styled from "styled-components";

export const PageHeaderContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  height: 100px;

  background-color: var(--botao);
  color: var(--titulo-header);

  span {
    font-size: 2rem;
  }

  svg {
    font-size: 48px;
  }
`;