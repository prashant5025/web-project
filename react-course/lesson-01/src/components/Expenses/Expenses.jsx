import React from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../Features/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "../Features/ExpensesList";
import ExpensesChart from "../Chart/Chart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
