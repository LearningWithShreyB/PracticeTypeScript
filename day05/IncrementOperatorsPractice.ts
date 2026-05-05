export { }

console.log("----- OPERATORS IN TYPESCRIPT -----");

let pre_inc: number = 5;

console.log("The value for pre-increment value is:", pre_inc);

let post_inc: number = 10;

console.log("The value for post-increment value is:", post_inc)

console.log("\n--- Increment Operators ---");
console.log("Pre-increment:", ++pre_inc);
let res01: number = ++pre_inc;
console.log("The value assignment through pre-increment:", res01);
console.log("After pre-increment:", pre_inc);
console.log("Post-increment:", post_inc++);
let res02: number = post_inc++;
console.log("The value assignment through post-increment:", res02);
console.log("After post-increment:", post_inc);
