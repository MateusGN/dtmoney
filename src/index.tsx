import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Venda de HotWeels",
          type: "deposit",
          category: "Venda",
          amount: 15,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Açai",
          type: "withdraw",
          category: "Comida",
          amount: 11,
          createdAt: new Date("2021-02-12 12:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
