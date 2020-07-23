const heroes = ['아이언맨', '토르', '닥터 스트레인지', '캡틴 아메리카'];

// 1
function print(hero)  {
  console.log(`1. ${hero}`);
}

heroes.forEach(print);

// 2
heroes.forEach(function(hero) {
  console.log(`2. ${hero}`);
})

// 3
heroes.forEach((hero) => {
  console.log(`3. ${hero}`);
})