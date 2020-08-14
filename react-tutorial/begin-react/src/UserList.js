import React from 'react';

function User({ user }) {
    return (
        <div>
          <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );
}

function UserList() {
  const users = [
      {id: 1, username: "test1", email: "test1@email.com"},
      {id: 2, username: "test2", email: "test2@email.com"},
      {id: 3, username: "test3", email: "test3@email.com"},
  ];

  return (
      <div>
          {
              users.map(
                  user => (<User user={user} key={user.id} />)
              )
          }
      </div>
  );
}

export default UserList;