import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <>
      {/* 주석입니다. */}
      <Hello />
      <div 
        // 또는 이렇게
        style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
