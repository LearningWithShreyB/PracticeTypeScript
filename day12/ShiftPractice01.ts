export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** Shift method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

console.log("Array before shift method:", fruits);
let m1 = fruits.shift();
console.log("Array after shift method:", fruits);
console.log("shift element:", m1);
