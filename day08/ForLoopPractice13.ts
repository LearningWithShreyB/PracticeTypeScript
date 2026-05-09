export { }
console.log("**** Practicing For loop ****");

console.log("\n**** Count Number of Digits in a Number ****");

console.log("\nThe result is: ");

let num: number = 1234;
let count: number = 0;

for (let i: number = num; i > 0; i = Math.floor(i / 10)) {
    count++
}
console.log(count);

