console.log('----------------------------------- 배열 내장함수 forEach -----------------------------------');

const heroes = ['아이언맨', '토르', '닥터 스트레인지', '캡틴 아메리카'];

// 1
function print(hero)  {
  console.log(`1. ${hero}`);
}

heroes.forEach(print);

// 2
heroes.forEach(function(hero) {
  console.log(`2. ${hero}`);
})

// 3
heroes.forEach((hero) => {
  console.log(`3. ${hero}`);
})

console.log();
console.log('----------------------------------- 배열 내장함수 map -----------------------------------');

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

console.log();
console.log('----------------------------------- 배열 내장함수 filter -----------------------------------');

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

console.log();
console.log('----------------------------------- 배열 내장함수 splice slice -----------------------------------');

let numbers = [1, 2, 3, 4];

const index = numbers.indexOf(3);
const spliced = numbers.splice(index, 2); // 기존의 배열이 변경됨

console.log(numbers);
console.log(spliced);

numbers = [1, 2, 3, 4];
const sliced = numbers.slice(0, 2);       // 기존의 배열은 유지됨

console.log(numbers);
console.log(sliced);

console.log();
console.log('----------------------------------- 배열 내장함수 shift, pop, unshift, push, concat, join -----------------------------------');

numbers = [1, 2, 3, 4];

const shifted = numbers.shift(); // 처음부터 뺌

console.log(shifted);
console.log(numbers);

numbers = [1, 2, 3, 4];

const poped = numbers.pop();    // 마지막부터 뺌

console.log(poped);
console.log(numbers);

numbers = [1, 2, 3, 4];

numbers.unshift(0);             // 처음부터 추가
console.log(numbers);

numbers.push(5);                // 마지막부터 추가
console.log(numbers);           

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);     // 기존의 배열의 값들이 바뀌지 않음
console.log(concated);

const array = [1, 2, 3, 4, 5];

console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));

console.log();
console.log('----------------------------------- 배열 내장함수 reduce -----------------------------------');

numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

let avg = numbers.reduce((accumulator, current, index, array) => {
  if(index === array.length - 1)  {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0)

console.log(avg);

console.log();
console.log('----------------------------------- 배열 내장함수 reduce 다른 예시 -----------------------------------');

const alphabets = ['a', 'a', 'a', 'b', 'b', 'c', 'd', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
  if(acc[current])  {     // acc[current] === acc.a(exist?)
    acc[current] += 1;
  }
  else {
    acc[current] = 1;
  }

  return acc;
}, {});

console.log(counts);

console.log();
console.log('----------------------------------- 배열 내장함수 복습과 퀴즈 -----------------------------------');

function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.reduce((acc, current) => {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
//   export default countBiggerThanTen;
  