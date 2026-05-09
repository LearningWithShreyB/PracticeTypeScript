export { }
console.log("**** Practicing Continue Command ****");

console.log("\n**** Print odd numbers from 1 to 20 using a for loop ****");

console.log("\nThe result is: ");

for (let i: number = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
