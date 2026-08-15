import Button from "react-bootstrap/Button";

import { ButtonStyle } from "./style.ts";
import type { ButtonProps } from "../../types/componentProps.ts";


// 10rem - pequeno
// 18rem - medio
// 30rem - grande
function ButtonComponent({ type, size, $bgColor, $textColor, action, alternativeText, children }: ButtonProps) {
  return (
    <ButtonStyle size={size} $bgColor={$bgColor} $textColor={$textColor}>
      <Button
        role="button"
        type={type}
        aria-label={alternativeText}
        title={alternativeText}
        variant={$bgColor}
        className="botao-default"
        style={{ maxWidth: "100%" }}
        onClick={action}
      >
        {children}
      </Button>
    </ButtonStyle>
  );
}

export default ButtonComponent;