// DOM : html 각 태그에 대한 정보를 가지고 있는 자바스크립트 객체
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

// const buttons = document.querySelectorAll('button');
// const [increase, decrease] = buttons;

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
