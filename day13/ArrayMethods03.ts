export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** filter() method ****");

let fruits: Array<string> = ['apple', 'pineapple', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//With filter() method
console.log("\nGetting the even elements from Numbers array");
let arr01 = numbers.filter(function (value) {
    return value % 2 === 0;
})

console.log("Original Array:", numbers);
console.log("Updated Array:", arr01);

console.log("\nGetting the elements starting with letter 'p' from Fruits array");
let arr02 = fruits.filter((value) => value.charAt(0) === 'p')

console.log("Original Array:", fruits);
console.log("Updated Array:", arr02);


console.log("\nGetting the elements from Numbers array by doubling only the odd numbers");
let arr03 = numbers.filter((value) => {
    if (value % 2 !== 0) {
        value * 2;
    }
    return value
})

console.log("Original Array:", numbers);
console.log("Updated Array:", arr03);


