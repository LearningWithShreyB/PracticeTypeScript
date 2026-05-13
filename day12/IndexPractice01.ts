export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** indexof method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,121,13];

console.log("\n The result of first set is:");
let m1 = fruits.indexOf('mango');
console.log("indexof elements:", m1);

console.log("\n The result of second set is:");
let m2 = numbers.indexOf(21);
console.log("indexof elements:", m2);

console.log("\n The result of third set is:");
let m3 = numbers.indexOf(4,3);
console.log("indexof elements:", m3);