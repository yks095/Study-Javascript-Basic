console.log('----------------------------------- 반복문 for -----------------------------------');

let array = [];
for(let i = 0; i < 10; i++) {
  array.push(i);
}
console.log(array);

array = [];
for(let i = 9; i >= 0; i--)  {
  array.push(i);
}
console.log(array);

array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log();
console.log('----------------------------------- 반복문 while -----------------------------------');

let i = 0;
let isFun = false;

while(!isFun) {
    console.log(i);
    i++;
    if(i === 30)    {
        isFun = true;
    }
}

console.log();
console.log('----------------------------------- 반복문 for of, for in -----------------------------------');

const arr = [1, 2, 3, 4, 5];

for(let val of arr) {
  console.log(val);
}

const dog = {
  name : '강아지',
  sound : '멍멍',
  age : 2
};

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

for(let key in dog) {
  console.log(`${key} : ${dog[key]}`);
}

console.log();
console.log('----------------------------------- 반복문 continue, break -----------------------------------');

for (let i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    if (i === 5) {
      break;
    }
    console.log(i);
}
  
console.log();
console.log('----------------------------------- 연습문제 -----------------------------------');

function biggerThanThree(numbers) {
    /* 구현해보세요 */
    let array = [];
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] > 3)  {
        array.push(numbers[i]);
      }
    }
  
    return array;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
  
//   export default biggerThanThree;
  