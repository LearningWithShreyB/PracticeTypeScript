export { }

console.log("**** Practicing Inheritance Concept in TypeScript ****");

console.log("\n**** Basic Inheritance ****");

class Parent {
    a: number = 10;

    res01(): void {
        console.log(`This is a res01() method from Parent class having value ${this.a}`);
    }
}

class Child extends Parent {
    b: number = 20;

    res02(): void {
        console.log(`This is a res01() method from Child class having value ${this.b}`);
    }
}

let obj01 = new Child();

obj01.res01();
obj01.res02();