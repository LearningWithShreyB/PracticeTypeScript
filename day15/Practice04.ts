export { }

console.log("\n**** Check if all elements are positive using every ****");

let numbers:Array<number>=[1,2,3,4,5,5,6,1];
let fruits:(number|string)[]=['apple','mango','pear','pineapple'];

let res05:boolean=numbers.every(value=>value>0);

console.log(`The result is ${res05}`);


console.log("\n**** Remove duplicates from an array using filter and indexOf ****");

let res06:number[]=numbers.filter((value,index)=> numbers.indexOf(value)===index)

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res06}`);

console.log("\n**** Reverse an array ****");

let res07:number[]=numbers.reverse();

console.log(`The updated array is ${res07}`);


/*console.log("\n**** Find the sum of all numbers using reduce ****");

let sum:number=0
let res03:number=numbers.reduce((sum,value)=>sum+=value,0);

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res03}`);


console.log("\n**** Check if at least one element is even using some ****");

let res04:boolean=numbers.some(value=>value%2===0);

console.log(`The result is ${res04}`); */