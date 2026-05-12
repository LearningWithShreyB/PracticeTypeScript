export { }

console.log("**** Practicing Tuples ****");

console.log("\n**** Tuple with two values ****");

let r1: [string, number] = ["SB", 2026];

console.log("\n The result of set is:");

for (let i: number = 0; i < r1.length; i++) {
    console.log(r1[i]);
}

let res: string = `Hello ${r1[0]}, Have a rocking ${r1[1]} year ahead!!`;
console.log(res);