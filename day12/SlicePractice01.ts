export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** Slice method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1,2,3,4,5,6,7,8,9];

console.log("\n The result of first set is:");
let m1 = numbers.slice(3,5);

console.log("slice element:", m1);

console.log("\n The result of second set is:");
let m2 = fruits.slice(0,3);

console.log("slice element:", m2);
