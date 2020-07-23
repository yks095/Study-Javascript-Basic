const todos2 = [
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
  
  const tasksNotDone = todos2.filter(todo => todo.done === true);
  const tasksNotDone2 = todos2.filter(todo => !todo.done);
  
  console.log(tasksNotDone);
  console.log(tasksNotDone2);