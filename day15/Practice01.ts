export { }

console.log("\n**** Add an element to the end of an array using push ****");

let numbers: Array<number | string> = [1, 2, 3];

numbers.push(4, 5);

console.log(`The result is ${numbers}`);


console.log("\n**** Remove the last element from an array using pop. ****");

numbers.pop();

console.log(`The result is ${numbers}`);


console.log("\n**** Remove the first element from an array using shift. ****");

numbers.shift();

console.log(`The result is ${numbers}`);


console.log("\n**** Add elements at the beginning of an array using unshift ****");

numbers.unshift(1);

console.log(`The result is ${numbers}`);


console.log("\n**** Concatenate two arrays using concat ****");

let fruits: (number | string)[] = ['apple', 'mango']

let total: (number | string)[] = numbers.concat(fruits);

console.log(`The result is ${total}`);