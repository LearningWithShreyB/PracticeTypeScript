export { }

console.log("**** Practicing String Methods ****");

console.log("\n**** concat method ****");

let str1:string="welcome ";
let str2:string="to typescript";
let str3:string=" and javascript";

console.log(`The result is ${str1.concat(str2)}`);
console.log(`The result is ${str1.concat(str2).concat(str3)}`);