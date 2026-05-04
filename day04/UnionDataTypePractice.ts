export{}

console.log("----Understanding Union data type in TypeScript----");

let value:number|string|boolean;
value=true;
console.log("The value is:", value);
console.log("The data type value is:", typeof(value));

value=101.79767;
console.log("The value is:", value);
console.log("The data type value is:", typeof(value));

value='Hello TypeScript!!';
console.log("The value is:", value);
console.log("The data type value is:", typeof(value));