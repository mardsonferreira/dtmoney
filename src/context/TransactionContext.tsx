import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";

import {
  Transaction,
  TransactionInput,
  TransactionsProviderProps,
  TransactionsContextData,
} from "./types";

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
