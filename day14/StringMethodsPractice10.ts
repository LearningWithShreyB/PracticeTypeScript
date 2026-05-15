export { }

console.log("**** Practicing String Methods ****");

console.log("\n**** split method ****");

let str01:string='Hello TypeScript';

console.log(`The result is ${str01.split(" ")}`);

let str02:string='abc@abc.com';

let str03:string[]= str02.split("@");


console.log(`The result is ${str03}`);

console.log(`The result is ${str03[1].split(".")}`);

