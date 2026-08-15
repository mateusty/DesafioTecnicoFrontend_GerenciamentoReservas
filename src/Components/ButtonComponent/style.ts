import styled from "styled-components";
import type { ButtonStyleProps } from "../../types/componentProps.ts";

export const ButtonStyle = styled.div<ButtonStyleProps>`
    .botao-default{
        width:${props => props.size} !important;
        background-color: ${props => props.$bgColor} !important;
        color:${props => props.$textColor} !important;      
        border: none !important;
        place-items: center;
        transition: 0.3s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;