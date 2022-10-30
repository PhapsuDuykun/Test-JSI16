import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  //TODO: Work on the sorting user algorithms here
  const addUserHandler = (uName, uAge) => {
    uAge.sort(function(a, b){return a-b});
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  this.state = {
    data: [
     {id: 1, name: uName , age: uAge}
    ]
  }
}
  delete(item) {
    const data = this.state.data.filter(i => i.id !== item.id)
    this.setState({data})

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}


export default App;