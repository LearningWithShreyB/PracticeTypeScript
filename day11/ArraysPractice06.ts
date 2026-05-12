export { }

console.log("**** Practicing Arrays ****");

console.log("\n**** A functions takes an Array and returns an array ****");

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed
let empIds: Array<number> = [101, 102, 103, 104]; // Only numbers allowed
let data: Array<string | number> = ["John", "Smith", 101, 102]; // Union type (strings and numbers)
let mixedData: Array<any> = [1, "John", true, null]; // Any type allowed (multi-type array)

console.log("\n The result of first set is:");

function f2(empNames: string[]): string[] {
    let res: string[] = [];
    for (let i: number = 0; i < empNames.length; i++) {
        res[i] = empNames[i].toUpperCase();
    }

    return res;
}

console.log(f2(empNames));