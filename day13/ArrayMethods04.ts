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


console.log("\nCount total elements in an array");
let arr02 = fruits.reduce((count,value) => count +1,0)

console.log("Original Array:", fruits);
console.log("Updated Array:", arr02);

let nums:number[]=[3,4,5,6];
console.log("\nCount total elements in an array");
let arr03 = nums.reduce((count,value) => count +1,1)

console.log("Original Array:", nums);
//if count is 0 -> it will take 0 and then the correct elements
//if count is 1 or any value -> it will take that value and then from that value it started working
//For eg count is 2 and original array has 4 elemnts then total count is 2+ original array count
console.log("Updated Array:", arr03);



