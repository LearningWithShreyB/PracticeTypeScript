export{}

console.log("**** Print the season based on the month number ****");

let month:number=5;

console.log(`The month number entered is ${month}`);

switch(month)
{
    case 12:
    case 1: 
    case 2: console.log("The season is Winter");
    break;

    case 3:
    case 4:
    case 5: console.log("The season is Spring");
    break;

    case 6: 
    case 7: 
    case 8: console.log("The season is Summer");
    break;

    case 9: 
    case 10:
    case 11: console.log("The season is Autumn");
    break;
    
    default: console.log("The month entered is invalid");
}