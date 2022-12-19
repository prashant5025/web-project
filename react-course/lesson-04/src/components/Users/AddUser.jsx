import React, { useState } from "react";
import ErrorModel from "../ErrorModel/ErrorModel";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Wrapper from "../../Helper/Wrapper";

import classes from "./AddUser.module.css";
import UserList from "./UserList";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)."
      })
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);

  }
  return (
    <React.Fragment>
      {error && (<ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>)}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            placeholder="Enter Your Name"
          />
          <label className="" htmlFor="age">
            Age (Year)
          </label>
          <input
            type="number"
            name="username"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
            placeholder="Enter Your Age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
