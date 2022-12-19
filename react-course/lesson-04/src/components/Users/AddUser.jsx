import React, { useState, useRef } from "react";
import ErrorModel from "../ErrorModel/ErrorModel";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  //when we use ref, we don't need to use state
  // ref are uncontrolled components and they are not part of the react state so they don't cause re-rendering
  const nameInputRef = useRef();
  const AgeInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = AgeInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    // these are uncontrolled inputs
    // so we can't use the value property
    nameInputRef.current.value = "";
    AgeInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            ref={nameInputRef}
            placeholder="Enter Your Name"
          />
          <label className="" htmlFor="age">
            Age (Year)
          </label>
          <input
            type="number"
            name="username"
            id="age"
            ref={AgeInputRef}
            placeholder="Enter Your Age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
