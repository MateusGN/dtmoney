import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw"> - R$12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw"> - R$12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
