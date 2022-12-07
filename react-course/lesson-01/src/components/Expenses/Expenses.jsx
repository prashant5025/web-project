import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Features/ExpenseItem";
import ExpenseFilter from "../Features/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
            setFilteredYear(selectedYear);
    }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expense, key) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;