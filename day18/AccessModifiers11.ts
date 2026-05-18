export { }

console.log("**** Practicing Access Modifiers Concept in TypeScript ****");

console.log("\n**** Access Modifiers when child class have private property ****");

class Parent {
    a: string;
    b: number;

    constructor(a: string, b: number) {
        this.a = a;
        this.b = b;
    }

    res01(): void {
        console.log(`This is a res01() method from Parent class having values ${this.a} and ${this.b}`);
    }
}

class Child extends Parent {
    private c: number = 500;
    d: number = 700;

    constructor(a: string, b: number, c: number, d: number) {
        super(a, b);
        this.c = c;
        this.d = d;
    }

    res02(): void {
        console.log(`This is a res02() method from Child class having values ${this.c} and ${this.d}`);
    }

    res01(): void {
        super.res01();
        console.log(`This is a res01() method from Child and Parent class having values ${this.a},${this.b},${this.c} and ${this.d}`);
    }

    m2():void{
        console.log("This is a m2() method from child class which is invoking value of c");
        console.log("The value of private variable c",this.c);
    }
}

let obj01 = new Child("SB", 89, 76, 908);

console.log(obj01.a);
console.log(obj01.b);
//console.log(obj01.c); Not accessible
console.log(obj01.d);

obj01.res01();
obj01.res02();
obj01.m2();


console.log("\After Updation:")
obj01.a = "VB";
obj01.b = 5000;
//obj01.c = 2400;  Not accessible
obj01.d = 7800;

console.log(obj01.a);
console.log(obj01.b);
//console.log(obj01.c); Not accessible
console.log(obj01.d);
obj01.res01();
obj01.res02();