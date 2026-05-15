export { }

let numbers: Array<number> = [1, 2, 3, 4, 5, 5, 6, 1];
let fruits: (string)[] = ['apple', 'mango', 'pear', 'pineapple'];

console.log("\n**** Convert a string to lowercase using toLowerCase ****");

let fruits02: string = 'Hello there!!';
let res10: string = fruits02.toLowerCase();

console.log(`The result is ${res10}`);


console.log("\n**** Get a character at a specific index using charAt() ****");

let res11: string = fruits02.charAt(6);

console.log(`The result is ${res11}`);

console.log("\n**** Find the position of a word using indexOf() ****");

let res12: number = fruits02.indexOf('l');

console.log(`The result is ${res12}`);


console.log("\n**** Check if a string includes a word using includes() ****");

let res13: boolean = fruits.includes('guava');

console.log(`The result is ${res13}`);


console.log("\n**** Convert a string to uppercase using toUpperCase ****");

let fruits01: string = 'Hello there!!';
let res09: string = fruits01.toUpperCase();

console.log(`The length is ${res09}`);