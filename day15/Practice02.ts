export { }

console.log("\n**** Extract a subarray using slice ****");

let numbers:Array<number|string>=[1,2,3,4,5];
let fruits:(number|string)[]=['apple','mango','pear','pineapple'];
let slice:(number|string)[]=numbers.slice(1,3);

console.log(`The result is ${slice}`);


console.log("\n**** Insert and delete elements using splice ****");

let splice:(number|string)[]=numbers.splice(2,1,4);

console.log(`The result is ${splice}`);
console.log(`The updated array is ${numbers}`);


console.log("\n**** Find the index of a specific element using indexOf ****");

let res01:number=fruits.indexOf('pear');

console.log(`The result is ${res01}`);


console.log("\n**** Add elements at the beginning of an array using unshift ****");

numbers.unshift(1);

console.log(`The result is ${numbers}`);


console.log("\n**** Concatenate two arrays using concat ****");

let total:(number|string)[]=numbers.concat(fruits);

console.log(`The result is ${total}`);