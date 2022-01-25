import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 12000,
          type: "deposit",
          category: "Venda",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Hamburguer",
          amount: 59,
          type: "withdraw",
          category: "Alimentação",
          createdAt: new Date(),
        },
        {
          id: 1,
          title: "Aluguel do apartamento",
          amount: 1200,
          type: "withdraw",
          category: "Casa",
          createdAt: new Date(),
        },
        {
          id: 1,
          title: "Computador",
          amount: 5400,
          type: "deposit",
          category: "Venda",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
