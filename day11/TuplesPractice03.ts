export { }

console.log("**** Practicing Tuples ****");

console.log("\n**** Tuple with multiple values using for in loop ****");

let r2: [number, string, string, string, boolean] = [101, 'SB', '04-1999', 'Graduated', true]

console.log("\n The result of set is:");

for (let index in r2) {
    console.log(index);
    console.log(r2[index]);
}