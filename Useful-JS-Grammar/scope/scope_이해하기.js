// Scope : 변수 or 함수를 선언하게 될 때, 어디서 어디까지 유효한지에 대한 범위를 의미
// 1. Global Scope : 코드의 모든 범위에서 사용 가능
// 2. Function Scope : 특정 함수 내부에서 사용 가능
// 3. Block Scope : 반복문,조건문과 같이 {}로 감싸진 블록 내부에서 사용 가능
const value = "hello";

function myFunction() {
  console.log("myFunction : " + value);
}

function otherFunction() {
  const value = "bye";
  console.log("otherFunction : " + value);
}

myFunction();
otherFunction();

console.log("global scope : " + value);
console.log();

function myFunction2() {
  const value = "bye2";
  const anotherValue = "world";
  function insideFunction2() {
    console.log(`insideFunction : ${value} ${anotherValue}`);
  }
  insideFunction2();
}

myFunction2();

console.log("global scope2 : " + value);
// console.log(anotherValue);   // Error occured becuase 'anotherValue' is function scope
console.log();

function myFunction3() {
  const value = "bye";
  if (true) {
    const value = "world";
    console.log("block scope : " + value);
  }
  console.log("function scope : " + value);
}

myFunction3();
console.log("global scope : " + value);
console.log();

var value2 = "hello";

// var로 변수를 선언하게 된다면, 블록단위가 아닌 함수 단위로 scope가 설정 되어 있음
// 그래서 같은 함수에 똑같은 이름으로 값이 선언되어 있다면, 기존의 값에 영향이 미침
function myFunction4() {
  var value2 = "bye";
  if (true) {
    var value2 = "world";
    console.log("block scope : " + value2);
  }
  console.log("function scope : " + value2);
}

myFunction4();
console.log("global scope : " + value2);
console.log();

let value3 = "hello";

// var로 변수를 선언하게 된다면, 블록단위가 아닌 함수 단위로 scope가 설정 되어 있음
// 그래서 같은 함수에 똑같은 이름으로 값이 선언되어 있다면, 기존의 값에 영향이 미침
function myFunction5() {
  let value3 = "bye";
  if (true) {
    let value3 = "world";
    console.log("block scope : " + value3);
  }
  console.log("function scope : " + value3);
}

myFunction5();
console.log("global scope : " + value3);