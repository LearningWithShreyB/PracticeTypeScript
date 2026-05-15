export { }

console.log("\n****  Iterate through an array using forEach and print each element ****");

let numbers:Array<number>=[1,2,3,4,5];
let fruits:(number|string)[]=['apple','mango','pear','pineapple'];

console.log("\nThe Numbers array is:")
numbers.forEach((value,index)=>
{
    console.log(`For index ${index}, the value is ${value}`);
})

console.log("\nThe fruits array is:")
fruits.forEach((value,index)=>
{
    console.log(`For index ${index}, the value is ${value}`);
})


console.log("\n**** Create a new array by doubling the values using map ****");

let res01:number[]=numbers.map(value=> value*2)

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res01}`);

console.log("\n**** Filter out even numbers from an array using filter ****");

let res02:number[]=numbers.filter(value=>value%2===0);

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res02}`);


console.log("\n**** Find the sum of all numbers using reduce ****");

let sum:number=0
let res03:number=numbers.reduce((sum,value)=>sum+=value,0);

console.log(`The original array is ${numbers}`);
console.log(`The updated array is ${res03}`);


/*console.log("\n**** Convert an array to a string using toString ****");

let res03:string=fruits.toString();

console.log(`The result is ${res03}`); */