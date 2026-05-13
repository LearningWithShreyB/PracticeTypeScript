export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** UnShift method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1,2,3,4,5,6];

console.log("Array before concat method:", numbers);
let m1 = numbers.concat([8,9],[9,10,11],12);
console.log("Array after concat method:", numbers);
console.log("concat element:", m1);
