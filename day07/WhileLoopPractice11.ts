export { }

console.log("**** Practicing While loop ****");

console.log("\n**** Reverse a given number ****");

let originalNumber: number = 987656789;
let numberToReversed: number = originalNumber;
let reversedNumber: number = 0;

console.log("\nThe result is: ");
while (numberToReversed > 0) {
    let lastDigit: number = numberToReversed % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    numberToReversed = Math.floor(numberToReversed/10);
}
console.log(reversedNumber);

if(reversedNumber===originalNumber)
{
    console.log("The given number is palindrome number");
}
else
{
    console.log("The given number is not a palindrome number");
}


