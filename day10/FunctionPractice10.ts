export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Arrow Function with Implicit Return ****");

let msg = (a: number, b: number): string => `The addition of two numbers of ${a} and ${b} is ${a+b}` 

console.log(msg(100, 500));