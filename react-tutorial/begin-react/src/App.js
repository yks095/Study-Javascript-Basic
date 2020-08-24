import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users)  {
  console.log('활성화 된 유저 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const [ users, setUsers ] = useState([
    {id: 1, username: "test1", email: "test1@email.com", active: true},
    {id: 2, username: "test2", email: "test2@email.com", active: false},
    {id: 3, username: "test3", email: "test3@email.com", active: false},
]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);   // or setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active} 
        : user
    ));
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onCreate={onCreate} 
        onChange={onChange}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
  <div>활성화 된 유저 수 : {count}</div>
    </>
  );
}
 
export default App;
