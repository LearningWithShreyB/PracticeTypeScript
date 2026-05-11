export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Overloaded Function with different number of parameter ****");

function f1(a: number): string;

function f1(a: number, b?: number): string;

function f1(a: number, b: number, c?: number): string;

function f1(a: number, b: number, c: number): string {
    if (b === undefined) {
        return `The square of ${a} is ${a * a}`;
    }
    else if (c === undefined) {
        return `The multiplication of ${a} and ${b} is ${a * b}`;
    }
    else {
        return `The addition of ${a}, ${b} and ${c} is ${a + b + c}`;
    }
}

console.log(f1(10));
console.log(f1(10, 20));
console.log(f1(150, 120, 30));