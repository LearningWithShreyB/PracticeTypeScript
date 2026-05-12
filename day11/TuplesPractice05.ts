export { }

console.log("**** Practicing Tuples ****");

console.log("\n**** Tuple Array (Array of Tuples) ****");

let arr01: [number, string, string, string, boolean][] = 
[
[101, 'SB', '04-1999', 'Graduated', true],
[102, 'Scott', '07-2001', 'Graduated', false],
[103, 'Vijay', '04-1989', 'Graduated', false]
]

console.log("\n The result of set is:");

for(let i = 0; i < arr01.length; i++) {
    console.log(arr01[i]);
}
console.log("\nThe result is (arr01[1][2]):");
console.log(arr01[1][2]);
console.log("\nThe result is (arr01[2][1]):");
console.log(arr01[2][1]);