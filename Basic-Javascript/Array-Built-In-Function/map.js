const items = [
    {
      id : 1,
      text : 'hello'
    },
    {
      id : 2,
      text : 'bye'
    }
  ];
  
const texts = items.map(item => item.text);
  
console.log(texts);

const heroes2 = ['아이언맨', '토르', '닥터 스트레인지', '캡틴 아메리카'];

const idx2 = heroes2.indexOf('토르');
console.log(idx2);

const todos = [
    {
      id : 1,
      text : 'JS 입문',
      done: true
    },
    {
      id : 2,
      text : '반복문',
      done : true
    },
    {
      id : 3,
      text : '객체와 배열',
      done : true
    },
    {
      id : 4,
      text : '배열 내장함수',
      done : false
    }
  ];
  
  const idx3 = todos.findIndex(todo => todo.id === 3);
  const obj = todos.find(todo => todo.done === false);
  
  console.log(idx3);
  console.log(obj);