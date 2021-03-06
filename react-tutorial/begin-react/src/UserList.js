import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { id, username, email, active } = user;
    useEffect(() => {
      console.log('컴포넌트가 화면에 나타남');
      return () => {
        console.log('컴포넌트가 화면에서 사라짐');
      }
    }, []);
    return (
        <div>
          <b 
            style={{
              color: active ? 'green' : 'black',
              cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
          >
              {username}
          </b> 
          &nbsp;    {/* 공백 */}
          <span>{email}</span>
          &nbsp;
          <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
        {
          users.map(
            user => (
              <User 
                user={user} 
                key={user.id} 
                onRemove={onRemove}
                onToggle={onToggle}
              />
            )
          )
        }
    </div>
  );
}

export default React.memo(UserList, (prevProps, nextProps) => prevProps.users === nextProps.users);