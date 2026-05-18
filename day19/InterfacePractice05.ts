export { }

console.log("**** Practicing Interface Concept in TypeScript ****");

console.log("\n**** Class implements Interface ****");

interface A1
{
    a:string;

    m1():void;
}

class C1 implements A1
{
    a:string;
    d:number;

    constructor(a:string,d:number)
    {
        this.a=a;
        this.d=d;
    }

    m1():void
    {
        console.log("This is m1() method from interface A1");
    }

 m2():void
    {
        console.log("This is m2() method from class C1");
    }

}


let obj01 = new C1("SB",101);

console.log(`The value of a is ${obj01.a}`);
console.log(`The value of d is ${obj01.d}`);
obj01.m1();
obj01.m2();
