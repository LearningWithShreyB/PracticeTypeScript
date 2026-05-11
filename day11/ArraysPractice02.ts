export { }

console.log("**** Practicing Arrays ****");

console.log("\n**** Iterating over an array using a traditional for loop ****");

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed
let empIds: Array<number> = [101, 102, 103, 104]; // Only numbers allowed
let data: Array<string | number> = ["John", "Smith", 101, 102]; // Union type (strings and numbers)
let mixedData: Array<any> = [1, "John", true, null]; // Any type allowed (multi-type array)

console.log("\n The result of set is:");

for (let i: number = 0; i < empIds.length; i++) {
    console.log(empIds[i]);
}
