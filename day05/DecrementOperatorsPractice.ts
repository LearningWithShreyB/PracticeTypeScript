export { }

console.log("----- OPERATORS IN TYPESCRIPT -----");

let pre_dec: number = 25;

console.log("The value for pre-decrement value is:", pre_dec);

let post_dec: number = 50;

console.log("The value for post-decrement value is:", post_dec)

console.log("\n--- Decrement Operators ---");
console.log("Pre-decrement:", --pre_dec);
let res01: number = --pre_dec;
console.log("The value assignment through pre-decrement:", res01);
console.log("After pre-decrement:", pre_dec);
console.log("Post-decrement:", post_dec--);
let res02: number = post_dec--;
console.log("The value assignment through post-decrement:", res02);
console.log("After post-decremnet:", post_dec);
