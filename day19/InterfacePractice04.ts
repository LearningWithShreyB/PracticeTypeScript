export { }

console.log("**** Practicing Interface Concept in TypeScript ****");

console.log("\n**** Interface with another interface ****");

interface A1
{
    a:string;
    b:number;

    m1():void;
    m2():void;
}

interface A2 extends A1
{
    c:string;
    d:number;

    m3():void;
    m4():void;
}

let obj01:A2=
{
    a:"SB",
    b:30,
    c: "Hello",
    d: 50,

    m1():void{
        console.log("This is m1() method from interface A1");
    },

    m2():void{
        console.log("This is m2() method declared which is from interface A1");
    },

    m3(): void {
        console.log("This is m3() method from interface A2");
    },

    m4(): void {
        console.log("This is m4() method from interface A2");
    }
}

console.log(`The value of a is ${obj01.a}`);
console.log(`The value of b is ${obj01.b}`);
console.log(`The value of c is ${obj01.c}`);
console.log(`The value of d is ${obj01.d}`);
obj01.m1();
obj01.m2();
obj01.m3();
obj01.m4();
