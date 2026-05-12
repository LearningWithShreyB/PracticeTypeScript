export { }

console.log("**** Practicing Tuples ****");

console.log("\n**** Tuple Array (Array of Tuples) ****");

let students: [number, string, boolean][] = [
    [1, "Rahul", true],
    [2, "Aman", false],
    [3, "Neha", true]
];

console.log(students);

console.log("\n The result of set is:");

for(let student of students) {
    console.log(student);
}

for(let [id, name, status] of students) {
    console.log(id);
    console.log(name);
    console.log(status);
}


/* console.log("\nThe result is (arr01[1][2]):");
console.log(arr01[1][2]);
console.log("\nThe result is (arr01[2][1]):");
console.log(arr01[2][1]); */