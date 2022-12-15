import React from 'react'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
  return (
    <form onSubmit={addUserHandler}>
        <label className='' htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label className='' htmlFor="age">Age (Year)</label>
        <input type="number" name="username" id="age" />
        <button type='submit'>Add User</button>
    </form>
  )
}

export default AddUser