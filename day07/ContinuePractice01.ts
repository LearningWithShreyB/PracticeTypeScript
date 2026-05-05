export{}

console.log("**** Practicing continue command ****");

console.log("\nThe set of numbers are: ");

for(let i:number=1;i<=20;i++)
{
    if(i===6  || i===12 || i===18)
    {
       continue;
    }
    console.log(i);
}