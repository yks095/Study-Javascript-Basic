const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);     // 기존의 배열의 값들이 바뀌지 않음
console.log(concated);

const array = [1, 2, 3, 4, 5];

console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));