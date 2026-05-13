export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** includes method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,121,13];

console.log("\n The result of first set is:");
let m1 = fruits.includes('mango');
console.log("Does mango is included?", m1);

console.log("\n The result of second set is:");
let m2 = numbers.includes(21);
console.log("Does 21 is exists?:", m2);