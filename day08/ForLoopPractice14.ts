export { }
console.log("**** Practicing For loop ****");

console.log("\n**** Find Sum of Digits in a Number ****");

console.log("\nThe result is: ");


let num: number = 1234;
let sum: number = 0;

for (let i: number = num; i > 0; i = Math.floor(i / 10)) {
    sum = sum + i % 10;
}

console.log(sum);
