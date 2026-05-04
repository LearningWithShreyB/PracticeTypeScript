console.log("Creating a function for adding two numbers (Type-safe)")

function add(a: number, b: number): number {
    return a + b;
}
let result = add(50, 50);
console.log("Result: " + result);


console.log("\nCreating a function with strict typing (TypeScript safety)")

function add01(c: number, d: number): number {
    return c + d;
}

// ❌ Uncomment to see TypeScript compile-time error
// let result01 = add01(50, "50");

console.log("TypeScript prevents passing string instead of number");


console.log("\nCreating a function without type safety (JavaScript-like behavior)")

function add02(e: any, f: any) {
    return e + f;
}

let result02 = add02(10, "1");
console.log("Result (unsafe): " + result02);