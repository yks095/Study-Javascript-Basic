// 객체에서의 spead
const slime = {
    name : '슬라임'
  };
  
  const cuteSlime = {
    ...slime,
    attribute : 'cute'
  };
  
  const purpleCuteSlime = {
    ...cuteSlime,
    color : 'purple'
  };
  
  const greenCuteSlime = {
    ...purpleCuteSlime,
    color : 'green'
  };
  
  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);
  console.log(greenCuteSlime);


// 배열에서의 spread
const animals = ['dog', 'cat', 'bird'];
const anotherAnimals = [...animals, 'cow', ...animals];

console.log(animals);
console.log(anotherAnimals);