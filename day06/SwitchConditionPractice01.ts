export{}

console.log("**** Print the corresponding month name for a given month number ****");

let month:number=2;

console.log(`The month number entered is ${month}`);

switch(month)
{
    case 1: console.log("The month entered is January");
    break;

    case 2: console.log("The month entered is February");
    break;

    case 3: console.log("The month entered is March");
    break;

    case 4: console.log("The month entered is April");
    break;

    case 5: console.log("The month entered is May");
    break;

    case 6: console.log("The month entered is June");
    break;

    case 7: console.log("The month entered is July");
    break;

    case 8: console.log("The month entered is August");
    break;

    case 9: console.log("The month entered is September");
    break;

    case 10: console.log("The month entered is October");
    break;

    case 11: console.log("The month entered is November");
    break;

    case 12: console.log("The month entered is December");
    break;

    default: console.log("The month entered is invalid");
}