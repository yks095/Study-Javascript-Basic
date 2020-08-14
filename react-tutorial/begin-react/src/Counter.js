import React, { useState } from 'react'

function Counter()  {
    const [number, setNumber] = useState(0);      // useState를 호출하면 배열을 반환
    const onIncrease = () => {                    // 첫번째 파라미터는 현재 상태, 두번째 파라미터는 현재 상태를 바꿔주는 함수
        setNumber(prevNumber => prevNumber + 1);
      }
      const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
      }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onIncrease}>-1</button>
        </div>
    );
}

export default Counter;