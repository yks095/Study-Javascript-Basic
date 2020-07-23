
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