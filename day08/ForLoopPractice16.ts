export { }
console.log("**** Practicing For loop ****");

console.log("\n**** Calculate the sum of all even numbers from 1 to N ****");

console.log("\nThe result is: ");

let n: number = 20;
let sum: number = 0;

for (let i: number = 1; i <= n; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);
