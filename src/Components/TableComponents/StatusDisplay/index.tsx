import { StyledStatusDisplay } from "./style";

interface StatusDisplayProps {
    status: string
}

function StatusDisplay({ status }: StatusDisplayProps) {
  function handleColorStatus(value: string) {
    if (value === "Pending") return "color-mix(in srgb, var(--amarelo-atencao) 30%, var(--preto-primario))";
    if (value === "Sucesso") return "color-mix(in srgb, var(--verde-sucesso) 30%, var(--preto-primario))";
    if (value === "Perigo") return "color-mix(in srgb, var(--vermelho-perigo) 30%, var(--preto-primario))";
    else return "#333";
  }

  function handleBackgroundStatus(value: string) {
    if (value === "Pending") return "color-mix(in srgb, var(--amarelo-atencao) 50%, transparent)";
    if (value === "Sucesso") return "color-mix(in srgb, var(--verde-sucesso) 50%, transparent)";
    if (value === "Perigo") return "color-mix(in srgb, var(--vermelho-perigo) 50%, transparent)";
    else return "#333";
  }

  function handleBorderStatus(value: string) {
    if (value === "Pending") return "solid 1px color-mix(in srgb, var(--amarelo-atencao) 75%, var(--preto-primario))";
    if (value === "Sucesso") return "solid 1px color-mix(in srgb, var(--verde-sucesso) 75%, var(--preto-primario))";
    if (value === "Perigo") return "color-mix(in srgb, var(--vermelho-perigo) 75%, var(--preto-primario))";
    else return "#333";
  }

  return (
    <StyledStatusDisplay 
    $color={handleColorStatus(status)} 
    $background={handleBackgroundStatus(status)} 
    $border={handleBorderStatus(status)}>{status}</StyledStatusDisplay>
  );
}

export default StatusDisplay;
