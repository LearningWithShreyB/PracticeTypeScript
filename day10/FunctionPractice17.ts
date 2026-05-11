export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Overloaded Function with different parameter types ****");

function f1(a: number): string;

function f1(b: string): string;

function f1(ele: (number | string)): string {
    if (typeof ele === 'number') {
        return `The given User ID present is ${ele}`;
    }
    else {
        return `The given User name present is ${ele}`;
    }
}

console.log(f1(101));
console.log(f1('testuser01'));