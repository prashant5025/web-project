import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css";

const NewExpense = (props) => {
  const[isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
          />
      )}
    </div>
  );
};

export default NewExpense;
