export { }

console.log("**** Practicing Inheritance Concept in TypeScript ****");

console.log("\n**** Inheritance with optional property ****");

interface A1
{
    a:string;
    b:number;
    c?:string;

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

let obj02:A1=
{
    a:"SB",
    b:30,
    c:"Welcome",


    m1():void{
        console.log("This is m1() method from interface");
    },

    m2():void{
        console.log("This is m2() method declared which is from interface");
    }
}

console.log(`The value of a is ${obj01.a}`);
console.log(`The value of a is ${obj01.b}`);
console.log(`The value of c is ${obj01.c}`);
obj01.m1();
obj01.m2();

console.log(`The value of a is ${obj02.a}`);
console.log(`The value of b is ${obj02.b}`);
console.log(`The value of c is ${obj02.c}`);
obj02.m1();
obj02.m2();
