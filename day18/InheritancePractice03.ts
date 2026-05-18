export { }

console.log("**** Practicing Inheritance Concept in TypeScript ****");

console.log("\n**** Inheritance Overriding ****");

class Parent {
    a: number;
    b:number;

    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b;          
    }

    res01(): void {
        console.log(`This is a res01() method from Parent class`);
    }

    getDetails01():string{
        return `The value of property of a and b is ${this.a} and ${this.b}`;
    }
}

class Child extends Parent {
    c: number;
    d:number;

    constructor(a:number,b:number,c:number,d:number)
    {
        super(a,b);
        this.c=c;
        this.d=d;
    }

    res02(): void {
        console.log(`This is a res01() method from Child class`);
    }

    res01(): void {
        console.log(`This is a res01() method from child class`);
    }

    getDetails02():string{
        return `The value of property of c and d is ${this.c} and ${this.d}`;
    }
}

let obj01 = new Child(20,40,60,80);
console.log("\nBefore changing:")
console.log(obj01.getDetails01());
console.log(obj01.getDetails02());
obj01.res01();
obj01.res02();

console.log("\After changing:")
obj01.a=100;
obj01.b=500
console.log(obj01.getDetails01());
console.log(obj01.getDetails02());
obj01.res01();
obj01.res02();