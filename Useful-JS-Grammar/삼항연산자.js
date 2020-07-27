const array = [];
let text = array.length === 0 ? '배열이 비어있음.' : '배열이 비어있지 않음.'
console.log(text);

const condition1 = true;
const condition2 = false;

// 가급적 연속된 삼항연산자는 피해라 -> if문으로 대체
const value = condition1 ? '와우' : condition2 ? 'blahblah' : 'foo';
console.log(value);