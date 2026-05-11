export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Arrow Function with Optional Parameters ****");

let msg = (a: number, b?: number): string => {
    if (b !== undefined) {
        return `The addition of two numbers of ${a} and ${b} is ${a + b}`;
    }
    return `The square of ${a} is ${a * a}`;

}

console.log(msg(200, 800));

console.log(msg(50));