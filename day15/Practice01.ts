export { }

console.log("\n**** Add an element to the end of an array using push ****");

let numbers:Array<number>=[1,2,3];

numbers.push(4,5);

console.log(`The result is ${numbers}`);


console.log("\n**** Remove the last element from an array using pop.  ****");

numbers.pop();

console.log(`The result is ${numbers}`);