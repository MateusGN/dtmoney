import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>R$1.259,00</strong>
      </div>

      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Saldo" />
        </header>
        <strong>R$16.141,00</strong>
      </div>
    </Container>
  );
}
