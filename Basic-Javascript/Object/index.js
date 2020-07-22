console.log('----------------------------------- 비구조화 할당 -----------------------------------');
const nike_product = {
    name : 'nike hood',
    size : 'XL',
    price : 100000,
    stock : 10,
    category : 'TOP'
}

function getProductInfo(product)   {
    let text = `제품명은 ${product.name}, 사이즈는 ${product.size}, 가격은 ${product.price}, 재고는 ${product.stock}, 종류는 ${product.category} 입니다.`;
    console.log(text);
}

function getFewProductInfo(product)   {
    const {name, price, category} = product
    let text = `제품명은 ${name}, 가격은 ${price}, 종류는 ${category} 입니다.`;
    console.log(text);
}

function getLittleProductInfo({size, stock})   {
    let text = `사이즈는 ${size}, 재고는 ${stock} 입니다.`;
    console.log(text);
}

getProductInfo(nike_product);
getFewProductInfo(nike_product);
getLittleProductInfo(nike_product);

console.log();
console.log('----------------------------------- getter & setter(1) -----------------------------------');
const numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log('execute calculate!');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value)    {
        this._a = value;
        this.calculate();
    },
    set b(value)    {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);

console.log();
console.log('----------------------------------- getter & setter(2) -----------------------------------');

const dog = {
    _name : '멍멍이',
    set name(value) {
        console.log(`_name이 ${value}로 바뀝니다.`);
        this._name = value;
    }
}

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);