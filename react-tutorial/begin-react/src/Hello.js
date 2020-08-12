import React from 'react';  // react를 불러와서 사용하겠다.

function Hello({ color, name, isSpecial })    {
  return (
    <div style={{
        color
    }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;
