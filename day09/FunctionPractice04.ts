export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Named function with  Rest parameters - same type ****");

function f4(...nums: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log("\nThe first result set is: ");
console.log(f4(1, 2, 3, 4));

console.log("\nThe second result set is: ");
console.log(f4(1, 2, 3, 4, 5));
