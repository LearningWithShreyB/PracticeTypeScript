export { }

console.log("**** Practicing While loop ****");

console.log("\n**** Find the largest digit in a given number ****");

let num: number = 1332;
let largestDigit: number = 0;

console.log("\nThe result is: ");

while (num > 0) {
    let digit: number = num % 10;
    if (digit > largestDigit) {
        largestDigit = digit;
    }
    num = Math.floor(num / 10);
}

console.log(largestDigit);