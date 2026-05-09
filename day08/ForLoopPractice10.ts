export { }
console.log("**** Practicing For loop ****");

console.log("\n**** Print Sum of Odd Numbers between 1 and 20 ****");

let sum: number = 0;

console.log("\nThe result is: ");

for (let i: number = 1; i <= 20; i++) {

    if (i % 2 !== 0) {
        sum = sum + i;
    }
}

console.log(sum);
