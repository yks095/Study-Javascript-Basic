// Hoisting : 자바스크립트에서 아직 선언되지 않은 함수 or 변수를 끌어올려서 사용할 수 있는 자바스크립트의 작동 방식
// 피하는게 좋다.
myFunction();

function myFunction() {
  console.log('hello');
}

console.log(num);
var num = 1;
// 위 처럼 코딩 시, 자바스크립트는 아래처럼 인식 함
var num2;
console.log(num2);
num2 = 2;

// Below code will be occured errors;
// const나 let은 hoisting이 발생하지 않음
function fn() {
  console.log('letNum : ' + letNum);
  console.log('constNum : ' + constNum);
  let letNum = 1;
  const constNum = 1;
}

fn();