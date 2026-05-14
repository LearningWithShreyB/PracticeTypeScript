export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** every() method ****");

let fruits: Array<string> = ['apple', 'pineapple', 'apple', 'pear', 'melon'];

let numbers: Array<number> = [1, 2, 1, 4, 5, 6, 1, 8, 5, 10];


//With reduce() method
console.log("\nAll even numbers");
let arr01 = numbers.every((value) => value%2===0)

console.log(arr01);

console.log("\nAny negative numbers?");
let arr02 = numbers.every((value) => value>0)

console.log("Result", arr02);
