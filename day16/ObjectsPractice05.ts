export { }

console.log("**** Practicing Object in TypeScript ****");

console.log("\n**** Using 'type' aliases ****");

type employee =
    {
        name: string,
        eid: number,
        salary: number,
        job: string,
        getDetails: () => string
    }

let student1: employee =
{
    name: "Lenny",
    eid: 101,
    salary: 65000,
    job: "Manager",
    getDetails: function (): string {
        return `${this.name} is working as ${this.job} having ${this.eid} and earning ${this.salary}`;
    }
}


let student2: employee =
{
    name: "David",
    eid: 102,
    salary: 45000,
    job: "Trainer",
    getDetails: function (): string {
        return `${this.name} is working as ${this.job} having ${this.eid} and earning ${this.salary}`;
    }
}

console.log(`The name of the employee is ${student1["name"]}`);
console.log(`The employee ID of the employee is ${student1["eid"]}`);
console.log(`The salary of the employee is ${student1["salary"]}`);
console.log(`The job of the employee is ${student1["job"]}`);
console.log(`The overall details of the employee is ${student1["getDetails"]()}`);

console.log(`The name of the employee is ${student2["name"]}`);
console.log(`The employee ID of the employee is ${student2["eid"]}`);
console.log(`The salary of the employee is ${student2["salary"]}`);
console.log(`The job of the employee is ${student2["job"]}`);
console.log(`The overall details of the employee is ${student2["getDetails"]()}`);