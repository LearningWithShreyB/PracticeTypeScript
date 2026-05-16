export{}

console.log("**** Practicing Object in TypeScript ****");

console.log("\n**** Using 'object' type ****");

let employee =
{
    name:"Shrey",
    eid:101,
    salary:50000,
    job:'Sales Executive',
    getDetails():string
    {
        return `${this.name} is working as ${this.job} having ${this.eid} and earning ${this.salary}`;
    }
}

//Approach 1

console.log(`The name of the employee is ${employee.name}`);
console.log(`The employee ID of the employee is ${employee.eid}`);
console.log(`The salary of the employee is ${employee.salary}`);
console.log(`The job of the employee is ${employee.job}`);
console.log(`The overall details of the employee is ${employee.getDetails()}`);