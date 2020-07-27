// 객체 비구조화 할당
const object = {
    a : 1
  };
  
  const {a, b = 2} = object;
  console.log(a);
  console.log(b);
  
  const animal = {
    name : '멍멍이',
    type : '개'
  };
  
  const {name : nickname} = animal;
  console.log(nickname);
  console.log(animal);


// 배열 비구조화 할당
const array = [1];

const [one, two = 2] = array;
console.log(one);
console.log(two);


// 객체의 깊숙한 곳에 있는 값 꺼내기
// 1 => 가독성이 더 좋음
const deepObject = {
    state : {
      info : {
        name : 'kiseok',
        languages : ['java', 'javascript']
      }
    },
    value : 5
  }
  
  const {name, languages} = deepObject.state.info;
  const {languages : [first, second]} = deepObject.state.info;
  const {value} = deepObject;
  
  const extracted = {
    name, 
    languages, 
    first,
    second,
    value
  }
  console.log(extracted);
  
  // 2
  const deepObject2 = {
    state2 : {
      info2 : {
        name2 : 'kiseok',
        languages2 : ['java', 'javascript']
      }
    },
    value2 : 5
  }
  
  const {
    state2 : {
      info2 : {
        name2, languages2 : [firstLang, secondLong]
      }
    },
    value2
  } = deepObject2;
  
  const extracted2 = {
    name2, 
    firstLang, 
    secondLong,
    value2
  }
  
  console.log(extracted2);