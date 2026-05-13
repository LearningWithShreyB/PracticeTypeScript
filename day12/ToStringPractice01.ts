export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** ToString method ****");

let fruits: Array<string> = ['apple', 'mango', 'grapes', 'pear', 'melon'];

let numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,121,13];

let data: Array<string | number> = ["John", "Smith", 101, 102];

console.log("\n The result of first set is:");
console.log("The Type of array before toString method is:",typeof data);
let m1:string = data.toString();
console.log(m1);
console.log("The Type of array after toString method is:",typeof m1);

console.log("\n The result of second set is:");
console.log("The Type of array before toString method is:",typeof numbers);
let m2:string = numbers.toString();
console.log(m2);
console.log("The Type of array after toString method is:",typeof m1);