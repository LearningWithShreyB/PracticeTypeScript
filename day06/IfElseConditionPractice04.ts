export { }

console.log("**** Practicing IF-ELSE Condition ****");

let num1: number = 10;
console.log('The given number is: ' + num1);

if (num1 > 0) {
    console.log(`The given number is positive whose value is ${num1}.`);
}
else if (num1 < 0) {
    console.log(`The given number is negative whose value is ${num1}.`);
}
else {
    console.log(`The given number is zero whose value is ${num1}.`);
}