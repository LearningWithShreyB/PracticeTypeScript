export { }

console.log("**** Practicing Inheritance Concept in TypeScript ****");

console.log("\n**** Inheritance Overriding and super ****");

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
        console.log(`This is a res02() method from Child class`);
    }

    res01(): void {
        console.log(`This is a res01() method from child class`);
    }

    getDetails02():string{
        return `The value of property of c and d is ${this.c} and ${this.d}`;
    }
}

let obj01:Parent = new Child(20,40,60,80);

console.log(obj01.a);
console.log(obj01.b);

console.log(obj01.getDetails01());

obj01.res01();
/* Not accessible as its a child method
obj01.res02();
console.log(obj01.c);
console.log(obj01.d);
console.log(obj01.getDetails02()); */