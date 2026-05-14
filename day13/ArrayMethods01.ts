export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** forEach() method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* // Traditional For loop
console.log("\nGetting the elements of Fruites array");
for(let i:number=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

console.log("\nGetting the elements of numbers array");
for(let i:number=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
} */


//Now with forEach() method
console.log("\nGetting the elements of Fruites array");
fruits.forEach(function (elementFruits) {
    console.log(`Value: ${elementFruits}`);
})

console.log("\nGetting the elements of Numbers array");
numbers.forEach((numbers01, index) => {
    console.log(`Value: ${numbers01}`);
    console.log(`Index: ${index}`);
})
console.log("\nOn Array parameter Usecase");
let nums = [1,2,3,4];

nums.forEach((value, index, arr) => {

    console.log(`Value: ${value} | Original index: ${index} | Next value will come: ${arr[index]} | Modified array: ${arr[index+1]}`);

});