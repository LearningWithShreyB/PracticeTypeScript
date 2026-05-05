export { }

console.log("**** Check if a number is a multiple of both 5 and 10 ****");

let num1: number = -225;
console.log('The given number is: ' + num1);

if (num1 % 10 === 0) {
    if (num1 % 5 === 0) {
        console.log(`${num1} is a multiple of both 5 and 10`);
    }
}
else {
    console.log(`The number is not eligible`);
}