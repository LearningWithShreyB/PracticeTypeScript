export { }
console.log("**** Practicing Break Command ****");

console.log("\n**** Find and print the first even number between 1 and 10 ****");

console.log("\nThe result is: ");

let firstEven: number;

for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        firstEven = i;
        console.log(i);
        break;
    }
}
