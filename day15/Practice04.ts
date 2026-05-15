export { }

console.log("\n**** Check if all elements are positive using every ****");

let numbers:Array<number>=[1,2,3,4,5];
let fruits:(number|string)[]=['apple','mango','pear','pineapple'];

let res05:boolean=numbers.every(value=>value>0);

console.log(`The result is ${res05}`);


console.log("\n**** Create a new array by doubling the values using map ****");

let res01:number[]=numbers.map(value=> value*2)

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res01}`);

/*console.log("\n**** Filter out even numbers from an array using filter ****");

let res02:number[]=numbers.filter(value=>value%2===0);

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res02}`);


console.log("\n**** Find the sum of all numbers using reduce ****");

let sum:number=0
let res03:number=numbers.reduce((sum,value)=>sum+=value,0);

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res03}`);


console.log("\n**** Check if at least one element is even using some ****");

let res04:boolean=numbers.some(value=>value%2===0);

console.log(`The result is ${res04}`); */