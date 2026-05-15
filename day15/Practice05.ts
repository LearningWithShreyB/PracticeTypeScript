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


console.log("\n**** Check if a string starts with a specific word using startsWith() ****");

let res14: boolean = fruits02.startsWith('guava');

console.log(`The result is ${res14}`);


console.log("\n****  Check if a string ends with a specific word using endsWith() ****");

let res15: boolean = fruits02.endsWith('!');

console.log(`The result is ${res15}`);

console.log("\n**** Replace a word in a sentence using replace() ****");

let res16: string = fruits02.replace('Hello','Hey');

console.log(`The result is ${res16}`);


console.log("\n**** Split a sentence into words using split() and remove leading/trailing spaces using trim() ****");

let res17: string[] = fruits02.split(' ');

console.log("\nFor Split:")
console.log(`The result is ${res17}`);

console.log("\nFor Trim:")
let str:string='  Hello   ';
let res18: string = str.trim();

console.log(`The result is ${res18}`);