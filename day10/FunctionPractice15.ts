export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Anonymous function with Parameters and Return Type ****");

let marks = function (a: number, b: string): string {
    return `Congratulations ${b} on getting ${a}%`;
}

console.log(marks(90, 'SB'));