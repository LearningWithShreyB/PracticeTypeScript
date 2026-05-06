export { }

console.log("**** Practicing While loop ****");

console.log("\n**** Factorial of a given number ****");

let i: number = 1, fact: number = 1, num1: number = 3;
console.log("\nThe result is: ");
if (num1 < 0) {
    console.log("Factorial is not defined for negative numbers");
}
else {
    while (i <= num1) {
        fact *= i;
        i++;
    }
    console.log(fact);
}
