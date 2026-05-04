export{}

console.log("----Understanding undefined data type in TypeScript----");

console.log("Program where nothing is defined");
let value;
console.log("The value is:", value);
console.log("The data type value is:", typeof(value));

console.log("Program where we write undefined datatype");
let value_1:undefined;
console.log("The value is:", value_1);
console.log("The data type value is:", typeof(value_1));


function my_undefined()
{
    console.log("I'm inside a funxtion which is undefined");
}
let result=my_undefined();
console.log("The value is:", result);

console.log("Program where we differentiate between null and undefined");
let value_2=null;
let value_3;
console.log("The first value is:", value_2);
console.log("The first data type value is:", typeof(value_2));
console.log("The second value is:", value_3);
console.log("The second data type value is:", typeof(value_3));
