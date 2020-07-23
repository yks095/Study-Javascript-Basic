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