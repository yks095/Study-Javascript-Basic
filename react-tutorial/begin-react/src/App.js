import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {id: 1, username: "test1", email: "test1@email.com"},
    {id: 2, username: "test2", email: "test2@email.com"},
    {id: 3, username: "test3", email: "test3@email.com"},
];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId += 1;
  }

  return (
  <UserList users={users}/>
  );
}
 
export default App;
