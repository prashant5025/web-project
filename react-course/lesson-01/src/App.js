import React, { useState } from "react";
import axios from "axios";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 5, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
