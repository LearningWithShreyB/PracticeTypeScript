export { }
console.log("**** Practicing Continue Command ****");

console.log("\n**** Print numbers from 1 to 30, skipping multiples of 5 using a while loop ****");

console.log("\nThe result is: ");

let i: number = 1;

while (i <= 30) {
    if (i % 5 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
