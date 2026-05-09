export { }
console.log("**** Practicing For loop ****");

console.log("\n**** Print Prime Numbers between 1 and 50 ****");

let num: number = 500;

console.log("\nThe result is: ");

for (let i: number = 1; i <= num; i++) {
let isPrime: boolean = true;

    if (i < 2) {
        isPrime = false;
    }

    for (let j: number = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
