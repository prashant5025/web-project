import React from 'react';
import AddUser from './components/Users/AddUser';



function App() {
  const addUserHandler = (userName, userAge) => {
    console.log(userName, userAge);
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;
