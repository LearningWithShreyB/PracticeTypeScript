export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Arrow Function with Default Parameters ****");

let msg = (a: number, b: number = 0.25): string => {
    return `The multiplication of two numbers of ${a} and ${b} is ${a * b}`;
}

console.log(msg(200, 800));

console.log(msg(50));