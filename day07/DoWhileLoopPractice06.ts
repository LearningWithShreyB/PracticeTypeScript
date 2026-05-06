export { }
console.log("**** Practicing Do-While loop ****");

console.log("\n**** Perform basic arithmetic operations until the user chooses to exit ****");
let num1: number = 20;
let num2: number = 10;
let operator: string = "+";
let result: number;
let choice: string;

console.log("\nThe result is: ");
do {

    switch (operator) {
        case "+":
            result = num1 + num2;
            console.log(`The addition of ${num1} + ${num2} is ${result}`);
            break;

        case "-":
            result = num1 - num2;
            console.log(`The subtraction of ${num1} - ${num2} is ${result}`);
            break;

        case "*":
            result = num1 * num2;
            console.log(`The multiplication of ${num1} * ${num2} is ${result}`);
            break;

        case "/":
            if (num1 !== 0) {
                result = num2 / num1;
                console.log(`The subtraction of ${num2} / ${num1} is ${result}`);
                break;
            }
            else {
                console.log("Division by zero is not allowed.");
                break;
            }

        default:
            console.log("Invalid Operator.");

    }
    choice = 'n';

} while (choice === 'y');