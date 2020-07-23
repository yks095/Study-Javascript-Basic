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