export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** UnShift method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

console.log("Array before unshift method:", fruits);
let m1 = fruits.unshift('watermelon','melon');
console.log("Array after unshift method:", fruits);
console.log("shift element:", m1);
