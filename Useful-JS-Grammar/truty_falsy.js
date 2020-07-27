// falsy
// 자바스크립트에서는 undefined와 null을 falsy한 값으로 간주함
// 그러므로 앞에 '!'를 붙이면 true가 반환됨
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!false);
console.log(!NaN); // Not A Number

const value = 1 / "asdf";
console.log(value); // NaN 예시

// 위를 제외한 나머지는 truty한 값
console.log(!3);
console.log(!"hello");
console.log(!["array"]);
console.log(![]);
console.log(!{});

const val1 = {
  a : 1
}
if(val1)  {
  console.log('val1은 truty한 값');
}
const truty1 = val1 ? true : false;
const truty2 = !!val1;
console.log(truty1);
console.log(truty2);
