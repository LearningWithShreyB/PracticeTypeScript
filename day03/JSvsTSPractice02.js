console.log("Creating a function for adding two numbers")

function add(a, b) {
    return a + b;
}
let result = add(50, 50);
console.log("Result: " + result);


console.log("\nCreating a function without type safety")

function add01(c, d) {
    return c + d;
}

// No error in JavaScript
let result01 = add01(50, "50");
console.log("Result: " + result01);


console.log("\nAnother example without type safety")

function add02(e, f) {
    return e + f;
}

let result02 = add02(10, "1");
console.log("Result: " + result02);