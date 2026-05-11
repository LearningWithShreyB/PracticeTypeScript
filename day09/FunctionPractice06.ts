export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Named function with Optional Parameters ****");

function f6(a: number, b: number, c?: number): number {
    if (c === undefined) {
        return a + b;
    }
    return a + b + c;
}

console.log("\nThe first result set is: ");

console.log(f6(3, 6, 9));

console.log("\nThe second result set is: ");

console.log(f6(3, 6));