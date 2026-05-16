export { }

console.log("**** Practicing Object in TypeScript ****");

console.log("\n**** Inline Type Object ****");

let employee:
    {
        name: string,
        eid: number,
        salary: number,
        job: string,
        getDetails: () => string
    }
    =
{
    name: "David",
    eid: 102,
    salary: 45000,
    job: "Trainer",
    getDetails: function (): string {
        return `${this.name} is working as ${this.job} having ${this.eid} and earning ${this.salary}`;
    }
}




//Approach 1

console.log(`The name of the employee is ${employee["name"]}`);
console.log(`The employee ID of the employee is ${employee["eid"]}`);
console.log(`The salary of the employee is ${employee["salary"]}`);
console.log(`The job of the employee is ${employee["job"]}`);
console.log(`The overall details of the employee is ${employee["getDetails"]()}`);

employee.name = 'Scott';
employee["salary"] = 55000;
console.log(`The updated name of the employee is ${employee["name"]}`);
console.log(`The updated name of the employee is ${employee.salary}`);
console.log(`The overall details of the employee is ${employee["getDetails"]()}`);