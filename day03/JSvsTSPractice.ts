console.log("Creating a function for adding two number.")

function add(a:number,b:number): number
{
    return a+b;
}
let result = add(50,50);
console.log("Result: "+result);


console.log("Creating a function for adding two different datatypes")

function add01(c:number,d:number): number
{
    return c+d;
}
// Wrong usage (TypeScript error)
let result01 = add01(50, "50"); // ❌ Compile-time error
console.log("Result: "+result01);



