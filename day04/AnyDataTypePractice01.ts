export{}

console.log("----Understanding Any data type in TypeScript----");

console.log("Program where nothing is defined in start");
let value:any;
value="Hello";
console.log("The value is:", value);
console.log("The data type value is:", typeof(value));

value=101;
console.log("The value is:", value);
console.log("The data type value is:", typeof(value));

console.log("Program where some value is defined");
let value_1:any=true;
console.log("The value is:", value_1);
console.log("The data type value is:", typeof(value_1));

value_1=null;
console.log("The value is:", value_1);
console.log("The data type value is:", typeof(value_1));