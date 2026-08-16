import { StyledStatusDisplay } from "./style";

interface StatusDisplayProps {
    status: string
}

function StatusDisplay({ status }: StatusDisplayProps) {
  function handleColorStatus(value: string) {
    if (value === "Completed") return "color-mix(in srgb, var(--verde-sucesso) 30%, var(--preto-primario))";
    if (value === "Canceled") return "color-mix(in srgb, var(--vermelho-perigo) 30%, var(--preto-primario))";
    else return "color-mix(in srgb, var(--amarelo-atencao) 30%, var(--preto-primario))";
  }

  function handleBackgroundStatus(value: string) {
    if (value === "Completed") return "color-mix(in srgb, var(--verde-sucesso) 50%, transparent)";
    if (value === "Canceled") return "color-mix(in srgb, var(--vermelho-perigo) 50%, transparent)";
    else return "color-mix(in srgb, var(--amarelo-atencao) 50%, transparent)";
  }

  function handleBorderStatus(value: string) {
    if (value === "Completed") return "solid 1px color-mix(in srgb, var(--verde-sucesso) 75%, var(--preto-primario))";
    if (value === "Canceled") return "solid 1px color-mix(in srgb, var(--vermelho-perigo) 75%, var(--preto-primario))";
    else return "solid 1px color-mix(in srgb, var(--amarelo-atencao) 75%, var(--preto-primario))";
  }

  return (
    <StyledStatusDisplay 
    $color={handleColorStatus(status)} 
    $background={handleBackgroundStatus(status)} 
    $border={handleBorderStatus(status)}>{status}</StyledStatusDisplay>
  );
}

export default StatusDisplay;
