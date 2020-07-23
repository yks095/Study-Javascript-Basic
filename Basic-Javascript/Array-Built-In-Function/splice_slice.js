let numbers = [1, 2, 3, 4];

const index = numbers.indexOf(3);
const spliced = numbers.splice(index, 2); // 기존의 배열이 변경됨

console.log(numbers);
console.log(spliced);

numbers = [1, 2, 3, 4];
const sliced = numbers.slice(0, 2);       // 기존의 배열은 유지됨

console.log(numbers);
console.log(sliced);