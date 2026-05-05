export { }

console.log("**** Check if a number is positive and even ****");

let num1: number = -230;
console.log('The given number is: ' + num1);

if (num1 > 0) {
    if (num1 % 2 === 0) {
        console.log(`${num1} is a positive and even number`);
    }
}
else {
    console.log(`The number is negative`);
}