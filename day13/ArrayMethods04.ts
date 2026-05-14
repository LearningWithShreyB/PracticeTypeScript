export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** reduce() method ****");

let fruits: Array<string> = ['apple', 'pineapple', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//With reduce() method
console.log("\nThe sum of elements");
let arr01 = numbers.reduce(function (sum,value) {
    return sum+value
})

console.log("Original Array:", numbers);
console.log("Updated Array:", arr01);




console.log("\nGetting the elements from Numbers array by doubling only the odd numbers");
let arr03 = numbers.filter((value) => {
    if (value % 2 !== 0) {
        value * 2;
    }
    return value
})

console.log("Original Array:", numbers);
console.log("Updated Array:", arr03);
