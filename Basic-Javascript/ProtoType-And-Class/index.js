console.log();
console.log('----------------------------------- 프로토타입과 클래스 - 객체 생성자 -----------------------------------');

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.say = function() {
    console.log(this.sound);
  };
  
  let dog = new Animal("개", "멍멍이", "멍멍");
  let cat = new Animal("고양이", "야옹이", "야옹");
  
  dog.say();
  cat.say();  

console.log();
console.log('----------------------------------- 프로토타입과 클래스 - 객체 생성자 상속하기 -----------------------------------');

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
  }
  
  function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
  }
  
  Dog.prototype = Animal.prototype;
  Cat.prototype = Animal.prototype;
  
  dog = new Dog("멍멍이", "멍멍");
  cat = new Cat("야옹이", "야옹");
  
  dog.say();
  cat.say();

console.log();
console.log('----------------------------------- 프로토타입과 클래스 - ES6 Class -----------------------------------');

class Animal2  {
    constructor(type, name, sound)  {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  class Dog2 extends Animal2  {
    constructor(name, sound)  {
      super('개', name, sound);
    }
  }
  
  class Cat2 extends Animal2  {
    constructor(name, sound)  {
      super('고양이', name, sound);
    }
  }
  
  dog = new Dog2('멍멍이', '멍멍');
  cat = new Cat2('야옹이', '야옹');
  
  dog.say();
  cat.say();

console.log();
console.log('----------------------------------- 프로토타입과 클래스 - 연습 - Food Class 만들기 -----------------------------------');

class Food  {
    constructor(name) {
      this.name = name;
      this.brands = [];
    }
    addBrand(brand) {
      this.brands.push(brand);
    }
    print() {
      console.log(`${this.name}을/를 파는 가게들 : `)
      console.log(this.brands.join(', '));
    }
  }
  
  const pizza = new Food('피자');
  pizza.addBrand('pizzahut');
  pizza.addBrand('domino pizza');
  
  const chicken = new Food('치킨');
  chicken.addBrand('bbq');
  chicken.addBrand('bhc');
  
  pizza.print();
  chicken.print();