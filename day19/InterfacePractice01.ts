export { }

console.log("**** Practicing Inheritance Concept in TypeScript ****");

console.log("\n**** Basic Inheritance ****");

interface A1
{
    a:string;
    b:number;

    m1():void;
    m2():void;
}

let obj01:A1=
{
    a:"SB",
    b:30,

    m1():void{
        console.log("This is m1() method from interface");
    },

    m2():void{
        console.log("This is m2() method declared which is from interface");
    }
}

console.log(`The value of a is ${obj01.a}`);
console.log(`The value of a is ${obj01.b}`);
obj01.m1();
obj01.m2();
