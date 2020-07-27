// && 연산
const dog = {
    name: "멍멍이"
  };
  
  // function getName(animal)  {
  //   if(animal)  {
  //     return animal.name;
  //   }
  //   return undefined;
  // }
  // =>
  function getName(animal) {
    return animal && animal.name;
  }
  
  const name = getName(dog);
  console.log(name);
  
  // 앞의 값이 truty한 값이면 뒤의 값 출력
  // 앞의 값이 falsy한 값이면 앞의 값 출력
  console.log(true && "hello");
  console.log(false && "hello");
  console.log("truty" && "hello");
  console.log("" && "hello");
  console.log(0 && "hello");
  console.log(null && "hello");
  console.log(undefined && "hello");
  console.log(1 && "hello");
  console.log(1 && 1);
  
  const obj = { name: "name" };
  
  const objName = obj && obj.name;
  console.log(objName);


  // || 연산
const namelessCat = {
    name : ''
  };
  
  function getCatName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
  }
  
  const cat = getCatName(namelessCat);
  console.log(cat);

  // 앞의 값이 falsy한 값이면 뒤의 값 출력
  console.log(false || 'hello');
  console.log('' || '이름 없음');
  console.log(null || '널');
  console.log(undefined || '언디파인드');
  console.log(0 || '제로');
  console.log(1 || '일');
  