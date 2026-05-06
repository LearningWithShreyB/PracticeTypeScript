export { }

console.log("**** Practicing While loop ****");

console.log("\n**** Reverse a given number ****");

let numberToReversed: number = 12321123544;
let reversedNumber: number = 0;

console.log("\nThe result is: ");
while (numberToReversed > 0) {
    let lastDigit: number = numberToReversed % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    numberToReversed = Math.floor(numberToReversed/10);
}
console.log(reversedNumber);


