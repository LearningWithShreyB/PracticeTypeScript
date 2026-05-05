export { }

console.log("**** Check if a number is divisible by both 2 and 3 ****");
let num1: number = 85;
console.log('The given number is: ' + num1);

if (num1 % 2 === 0) {
    if (num1 % 3 === 0) {
        console.log(`${num1} is divisible by both 2 and 3.`);
    }
    else {
        console.log(`${num1} is divisible by 2 but not by 3.`);
    }
}
else {
    if (num1 % 3 === 0) {
        console.log(`${num1} is divisible by 3 but not by 2.`);
    }
    else {
        console.log(`${num1} is not divisible by both 2 and 3.`);
    }
}
