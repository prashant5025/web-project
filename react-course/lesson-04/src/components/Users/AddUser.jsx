import React from 'react'
import Card from '../UI/Card'

import classes from './AddUser.module.css'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label  htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder='Enter Your Name'/>
        <label className='' htmlFor="age">Age (Year)</label>
        <input type="number" name="username" id="age" placeholder='Enter Your Age'/>
        <button type='submit'>Add User</button>
    </form>
    </Card>
  )
}

export default AddUser