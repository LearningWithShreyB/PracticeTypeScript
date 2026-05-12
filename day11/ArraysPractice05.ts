export { }

console.log("**** Practicing Arrays ****");

console.log("\n**** Passing an Array to the function ****");

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed
let empIds: Array<number> = [101, 102, 103, 104]; // Only numbers allowed
let data: Array<string | number> = ["John", "Smith", 101, 102]; // Union type (strings and numbers)
let mixedData: Array<any> = [1, "John", true, null]; // Any type allowed (multi-type array)

console.log("\n The result of first set is:");

let f1 = (element: number | string, data: (number | string)[]): boolean => {
    for (let i: number = 0; i < data.length; i++) {
        if (data[i] === element) {
            return true;
        }
    }
    return false;
}

console.log(f1(101, data));
console.log(f1('Aman', data));

