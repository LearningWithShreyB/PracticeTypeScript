export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Named function with parameters and return type ****");

function f1(a: number, b: number): number {
    return a ** b;
}

let res: number = f1(2, 5);
console.log('The result is:',res);