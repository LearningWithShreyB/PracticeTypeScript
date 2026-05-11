export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Arrow Function with Parameters and a Return Type ****");

let msg = (a: number, b: number): string => {
    let res: number = a + b;
    return `The addition of two numbers of ${a} and ${b} is ${res} `
}

console.log(msg(100, 500));