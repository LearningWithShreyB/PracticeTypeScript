export { }

console.log("**** Practicing While loop ****");

console.log("\n**** Check if a number is prime ****");

let num1: number = 63;
let isPrime: boolean = true;

console.log("\nThe result is: ");

if (num1 < 2) {
    isPrime = false;
}
else {
    let i: number = 2;
    while (i <= Math.sqrt(num1)) {
        if (num1 % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
}

if (isPrime) {
    console.log(`${num1} is a prime number`);
}
else {
    console.log(`${num1} is not a prime number`);
}


