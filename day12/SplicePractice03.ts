export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** Splice method by ony adding****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1,2,3,4,5,6,7,8,9];

console.log("\n The result of first set is:");
console.log("Array before splice method:", fruits);
let m1 = fruits.splice(3,2,'kiwi');
console.log("Array after splice method:", fruits);
console.log("splice elements:", m1);

console.log("\n The result of second set is:");
console.log("Array before splice method:", numbers);
let m2 = numbers.splice(2,1,11,20,31);
console.log("Array after splice method:", numbers);
console.log("splice elements:", m2);