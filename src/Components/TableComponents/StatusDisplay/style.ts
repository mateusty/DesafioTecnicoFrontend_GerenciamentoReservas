import styled from "styled-components";

interface StyledStatusDisplayProps {
  $color: string;
  $background: string;
  $border: string;
}

export const StyledStatusDisplay = styled.span<StyledStatusDisplayProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-width: 108px;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;

  border: ${(props) => props.$border};
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$background};
`;