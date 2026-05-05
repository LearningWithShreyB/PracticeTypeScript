export { }

console.log("**** Find the largest of three numbers ****");
let num1: number = 10;
let num2: number = 30;
let num3: number = 20;
console.log('The first number is: ' + num1);
console.log('The second number is: ' + num2);
console.log('The third number is: ' + num3);

if (num1 === num2 && num2 === num3) {
    console.log("All three numbers are equal.");
}
else if (num1 >= num2 && num1 >= num3) {
    console.log(`The first number is largest whose value is ${num1}.`);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(`The second number is largest whose value is ${num2}.`);
}
else {
    console.log(`The third number is largest whose value is ${num3}.`);
}