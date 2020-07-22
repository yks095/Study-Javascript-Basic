const array = [1, 2, 3, "4", "5", { value: 6 }];

console.log(array);
console.log(array[5]);
array.push({ value: 7 });
console.log(array);
console.log(array[6]);

if (array.length === 7) {
  console.log("배열의 길이는 7입니다.");
} else {
  console.log("배열의 길이는 7이 아닙니다.");
}
