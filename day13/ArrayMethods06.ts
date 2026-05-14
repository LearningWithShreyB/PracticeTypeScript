export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** some() method ****");

let fruits: Array<string> = ['apple', 'pineapple', 'apple', 'pear', 'melon'];

let numbers: Array<number> = [1, 2, 1, 4, 5, 6, 1, 8, 5, 10];


//With reduce() method
console.log("\nExisted in an array");
let target01:string="apple";
let arr01 = fruits.some((value) => value===target01)

console.log("Is existed?", arr01);

console.log("\nAny negative numbers?");
let arr02 = numbers.some((value) => value<0)

console.log("Is existed?", arr01);
