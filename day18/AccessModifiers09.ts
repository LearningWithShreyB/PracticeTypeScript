export { }

console.log("**** Practicing Access Modifiers Concept in TypeScript ****");

console.log("\n**** Access Modifiers when parent class have private property ****");

class Parent {
    private a: string;
    b: number;
 
    constructor(a:string,b:number) {
        this.a=a;
        this.b=b;
    }

    res01(): void {
        console.log(`This is a res01() method from Parent class having values ${this.a} and ${this.b}`);
    }
}

class Child extends Parent {
    c: number = 500;
    d: number = 700;

    constructor(a:string,b:number,c:number,d:number) {
        super(a,b);
        this.c=c;
        this.d=d;
    }

    res02(): void {
        console.log(`This is a res02() method from Child class having values ${this.c} and ${this.d}`);
    }

    res01(): void {
        super.res01();
        console.log(`This is a res01() method from Child and Parent class having values ${this.b},${this.c} and ${this.d} and valu of a is not able to access since its a private variable`);
    }
}

let obj01 = new Child("SB",89,76,908);

//console.log(obj01.a); Not Accessible
console.log(obj01.b);
console.log(obj01.c);
console.log(obj01.d);

obj01.res01();
obj01.res02();


console.log("\After Updation:")
//obj01.a = "VB";  Not accessible
obj01.b = 5000;
obj01.c = 2400;
obj01.d = 7800;

//console.log(obj01.a);  Not accessible
console.log(obj01.b);
console.log(obj01.c);
console.log(obj01.d);
obj01.res01();
obj01.res02();