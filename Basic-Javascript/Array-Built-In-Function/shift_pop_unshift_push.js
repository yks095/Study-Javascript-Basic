let numbers = [1, 2, 3, 4];

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