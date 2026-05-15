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

/* console.log("\n**** Find the index of a specific element using indexOf ****");

let res01:number=fruits.indexOf('pear');

console.log(`The result is ${res01}`);


console.log("\n**** Check if an element exists in an array using includes ****");

let res02:boolean=fruits.includes('pear');

console.log(`The result is ${res02}`);


console.log("\n**** Convert an array to a string using toString ****");

let res03:string=fruits.toString();

console.log(`The result is ${res03}`); */