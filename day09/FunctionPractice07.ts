export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Named function with Default Parameters ****");

function f6(a: number, b: number = 0.5): number {
    return a * b;
}

console.log("\nThe first result set is: ");

console.log(f6(3, 2));

console.log("\nThe second result set is: ");

console.log(f6(3));