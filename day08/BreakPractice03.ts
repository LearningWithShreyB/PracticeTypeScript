export { }
console.log("**** Practicing Break Command ****");

console.log("\n**** Print numbers from 1 to 30 but stop when a number greater than 15 is found ****");

console.log("\nThe result is: ");

let firstEven: number;

for (let i: number = 1; i <= 30; i++) {
    if (i> 15) {
        break;
    }
    console.log(i);
}
