import React from 'react'
import Card from '../UI/Card'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
  return (
    <Card>
    <form onSubmit={addUserHandler}>
        <label className='' htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label className='' htmlFor="age">Age (Year)</label>
        <input type="number" name="username" id="age" />
        <button type='submit'>Add User</button>
    </form>
    </Card>
  )
}

export default AddUser