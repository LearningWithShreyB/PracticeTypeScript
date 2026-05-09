export { }
console.log("**** Practicing For loop ****");

console.log("\n**** Print Numbers Divisible by 3 and 5 from 1 to 100 ****");

console.log("\nThe result is: ");

for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

