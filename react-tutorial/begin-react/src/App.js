import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
  <Wrapper>
    <Hello name="react" color="red" isSpecial /> {/* isSpecial값을 true로 주지않아도 truty한 값으로 친다 */}
    <Hello color="pink" />
  </Wrapper>
  );
}

export default App;
