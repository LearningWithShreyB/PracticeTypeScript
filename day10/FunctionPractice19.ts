export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Overloaded Function with different number of parameter ****");

function f19(a: number): string;

function f19(a: string): number;

function f19(a: (number | string)): string | number {
    if (typeof a === 'number') {
        return `The square of ${a} is ${a * a}`;
    }
    else {
        return a.length;
    }
}

console.log(f19(10));
console.log(f19('Shrey'));