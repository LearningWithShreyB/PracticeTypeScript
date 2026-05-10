export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Named function with  Rest parameters - multiple types ****");

function f4(...data: (number | string)[]): number {
    return data.length;
}

console.log("\nThe first result set is: ");
console.log(f4(1, "SB", '04-1999', "Jaipur"));

console.log("\nThe second result set is: ");
console.log(f4(2, "PB", "09-2019", "Bikaner", 6));
