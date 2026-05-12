export { }

console.log("**** Practicing Arrays ****");

console.log("\n**** Iterating using the 'for...in' loop (indexes) ****");

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed
let empIds: Array<number> = [101, 102, 103, 104]; // Only numbers allowed
let data: Array<string | number> = ["John", "Smith", 101, 102]; // Union type (strings and numbers)
let mixedData: Array<any> = [1, "John", true, null]; // Any type allowed (multi-type array)

console.log("\n The result of first set is:");

for (let a1 of data) {
    console.log(a1);
}

console.log("\n The result of second set is:");

for (let a2 of mixedData) {
    console.log(a2);
}

console.log("\n The result of third set is:");

for (let a3 of empIds) {
    console.log(a3);
}

console.log("\n The result of fourth set is:");

for (let a4 of empNames) {
    console.log(a4);
}