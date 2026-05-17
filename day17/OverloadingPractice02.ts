export { }

console.log("**** Practicing Overloading Concept in TypeScript ****");

console.log("\n**** Using the Method Overloading ****");

class Calculator {

    sum(a: number, b: number): number;
    sum(a: number, b: number, c?: number): number;

    sum(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

let result1 = new Calculator();
console.log(result1.sum(1, 2));
let result2 = new Calculator();
console.log(result2.sum(1, 2, 3));