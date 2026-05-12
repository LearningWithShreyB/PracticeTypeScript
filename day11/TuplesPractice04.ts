export { }

console.log("**** Practicing Tuples ****");

console.log("\n**** Tuple with multiple values using for of loop ****");

let r2: [number, string, string, string, boolean] = [101, 'SB', '04-1999', 'Graduated', true]

console.log("\n The result of set is:");

for (let value of r2) {
    console.log(value);
}