// 객체에서의 rest
const purpleCuteSlime = {
    name : 'slime',
    attribute : 'cute',
    color : 'purple'
  };
  
  const {color, ...cuteSlimeRest} = purpleCuteSlime;
  console.log(cuteSlimeRest);
  
  const {attribute, ...slimeRest} = cuteSlimeRest;
  console.log(slimeRest);


// 배열에서의 rest
const numbers = [0, 1, 2, 3, 4, 5];

const [one, two, ...restNumbers] = numbers;   // 배열에서의 rest는 앞에 오지 못하고 맨 뒤에만 위치할 수 있다.
console.log(one);
console.log(two);
console.log(restNumbers);