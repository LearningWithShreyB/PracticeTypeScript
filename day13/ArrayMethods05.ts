export { }

console.log("**** Practicing Array Methods ****");

console.log("\n**** reduce() method ****");

let fruits: Array<string> = ['apple', 'pineapple', 'apple', 'pear', 'melon'];

let numbers: Array<number> = [1, 2, 1, 4, 5, 6, 1, 8, 5, 10];


//With reduce() method
console.log("\nCount occurences of specific elements in an array");
let target01:string="apple";
let arr01 = fruits.reduce((count,value) => 
    {
        if(value===target01){
            return count+1;
        }
        return count;
    },0)

console.log(`Occurrence of ${target01}:`, arr01);

console.log("\nCount occurences of specific elements in an array");
let target02:number=1;
let arr02 = numbers.reduce((count,value) => 
    {
        if(value===target02){
            return count+1;
        }
        return count;
    },0)

console.log(`Occurrence of ${target02}:`, arr02);


