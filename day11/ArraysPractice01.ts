export { }

console.log("**** Practicing Arrays ****");

console.log("\n**** Declaration, naming and printing without any loop ****");

let arr1: number[] = [101, 102];
let arr2: boolean[] = [];
arr2[0] = true;
arr2[1] = false;
arr2[2] = false;
arr2[3] = true;

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed
let empIds: Array<number> = [101, 102, 103, 104]; // Only numbers allowed
let data: Array<string | number> = ["John", "Smith", 101, 102]; // Union type (strings and numbers)
let mixedData: Array<any> = [1, "John", true, null]; // Any type allowed (multi-type array)
let arr3: Array<any> = [];
arr3[0] = 101;
arr3[1] = 'SB';
arr3[2] = 'A';
arr3[3] = true;
arr3[4] = 95.5;

console.log("\n The result of first set is:");
console.log(empIds);
console.log("\n The result of second set is:");
console.log(data);
console.log("\n The result of third set is:");
console.log(arr1);
console.log("\n The result of fourth set is:");
console.log(arr2);
console.log("\n The result of fifth set is:");
console.log(arr3);
console.log("\n The result of sixth set is:");
console.log(empNames);
console.log("\n The result of second value of sixth set is:");
console.log(empNames[1]);
console.log("\n The result of seventh set is:");
console.log(mixedData);