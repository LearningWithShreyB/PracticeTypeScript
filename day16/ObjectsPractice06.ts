export { }

console.log("**** Practicing Object in TypeScript ****");

console.log("\n**** Using 'type' aliases - Intersection Types ****");

type employee =
    {
        ename: string,
        eid: number,
        ejob: string
    }

type management =
    {
        mname: string,
        mid: number,
        mjob: string
    }


type company = employee & management &
{
    ratings: string,
    getDetails: () => string
}

let result1: company =
{
    ename: "Aman",
    mname: "Anil",
    eid: 101,
    mid: 201,
    ejob: "L1 Manager",
    mjob: "L5 Manager",
    ratings: "A++",
    getDetails: function (): string {
        return `${this.ename} is working as ${this.ejob} and ${this.mname} is working as ${this.mjob} having ids as ${this.eid} and ${this.mid} respectively and also gets the rating of ${this.ratings}`;
    }
}


let result2: company =
{
    ename: "Neeti",
    mname: "Surekha",
    eid: 102,
    mid: 202,
    ejob: "L2 Manager",
    mjob: "L5 Manager",
    ratings: "B++",
    getDetails: function (): string {
        return `${this.ename} is working as ${this.ejob} and ${this.mname} is working as ${this.mjob} having ids as ${this.eid} and ${this.mid} respectively and also gets the rating of ${this.ratings}`;
    }
}

console.log(`The name of the employee is ${result1["ename"]}`);
console.log(`The employee ID of the employee is ${result1["eid"]}`);
console.log(`The management name is ${result1["mname"]}`);
console.log(`The management ID is ${result1["mid"]}`);
console.log(`The job of the employee is ${result1["ejob"]}`);
console.log(`The job of the management is ${result1["mjob"]}`);
console.log(`The overall details are ${result1["getDetails"]()}`);

console.log(`The name of the employee is ${result2.ename}`);
console.log(`The employee ID of the employee is ${result2.eid}`);
console.log(`The management name is ${result2.mname}`);
console.log(`The management ID is ${result2.mname}`);
console.log(`The job of the employee is ${result2.ejob}`);
console.log(`The job of the management is ${result2.mjob}`);
console.log(`The overall details are ${result2.getDetails()}`);