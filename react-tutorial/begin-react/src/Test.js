import React, { useState } from 'react';

function Test()  {
    const hello = 'Hello, ';
    const [str, setStr] = useState(hello);

    const addA = () => {
        setStr(string => string + 'a');
    }
    const minusA = () => {
        setStr(string => hello);
        console.log(hello)
    }

    return (
        <>
          <h1>{str}</h1>
          <button onClick={addA}>+a</button>
          <button onClick={minusA}>-a</button>
        </>
    )
}

export default Test;