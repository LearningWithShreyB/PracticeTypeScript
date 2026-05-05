export { }

console.log("**** Perform basic arithmetic operations based on user input ****");
let operator: string = "+"
let num1: number = 18;
let num2: number = 6;

console.log(`The first number entered is ${num1}`);
console.log(`The second number entered is ${num2}`);
console.log(`The operator entered is ${operator}`);

switch (operator) {
    case "+": console.log(`The addition of ${num1} and ${num2} is ${num1 + num2}`);
        break;

    case "-": console.log(`The addition of ${num1} and ${num2} is ${num1 - num2}`);
        break;

    case "*": console.log(`The addition of ${num1} and ${num2} is ${num1 * num2}`);
        break;

    case "/": console.log(`The addition of ${num1} and ${num2} is ${num1 / num2}`);
        break;

    default: console.log("The operator entered is invalid");
}