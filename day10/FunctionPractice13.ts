export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Arrow Function with Rest Parameters ****");

let msg = (...elements: (number | string | boolean)[]): number => {
    return elements.length;
}

console.log("\nThe first result set is: ");
console.log(msg(1, 'Aman', 'Graduated', true));

console.log("\nThe second result set is: ");
console.log(msg(1, 'Aman', 'Graduated', true, "Married", false));