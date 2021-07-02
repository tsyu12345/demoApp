class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + "of sound");
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(this.name + "nya-nn");
    }
}

let animal = new Animal("cat");
animal.speak();

let cat = new Cat("child class-cat-");
cat.speak();