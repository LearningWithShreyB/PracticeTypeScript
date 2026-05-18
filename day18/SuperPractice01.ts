export { }

console.log("**** Practicing Super Concept in TypeScript ****");

console.log("\n**** Super method ****");

class Parent {
    a: number = 100;
    b: number = 300;

    constructor() {
        console.log("This is a default constructor from Parent class");
    }

    res01(): void {
        console.log(`This is a res01() method from Parent class having values ${this.a} and ${this.b}`);
    }
}

class Child extends Parent {
    c: number = 500;
    d: number = 700;

    constructor() {
        super();
        console.log("This is a default constructor from Child class");
    }

    res02(): void {
        console.log(`This is a res02() method from Child class having values ${this.c} and ${this.d}`);
    }

    res01(): void {
        super.res01();
        console.log(`This is a res01() method from Child and Parent class having values ${this.a},${this.b},${this.c} and ${this.d}`);
    }
}

let obj01 = new Child();

console.log(obj01.a);
console.log(obj01.b);
console.log(obj01.c);
console.log(obj01.d);

obj01.res01();
obj01.res02();


console.log("\After Updation:")
obj01.a = 1000;
obj01.b = 5000;
obj01.c = 2400;
obj01.d = 7800;

console.log(obj01.a);
console.log(obj01.b);
console.log(obj01.c);
console.log(obj01.d);
obj01.res01();
obj01.res02();