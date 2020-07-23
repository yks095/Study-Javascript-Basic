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