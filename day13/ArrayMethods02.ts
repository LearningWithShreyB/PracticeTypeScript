export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** map() method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//With map() method
console.log("\nGetting the upper case elements of Fruits array");
let arr01 = fruits.map(function (elementFruits, index) {
    return `Index ${index} : ${elementFruits.toUpperCase()}`;
})

console.log("Original Array:", fruits);
console.log("Updated Array:", arr01);

console.log("\nGetting the squared value of Numbers array");
let arr02 = numbers.map((value) => {
    return `${value * value}`
})

console.log("Original Array:", numbers);
console.log("Updated Array:", arr02);
