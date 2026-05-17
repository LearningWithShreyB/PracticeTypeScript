export { }

console.log("**** Practicing Overloading Concept in TypeScript ****");

console.log("\n**** Using the Constructor Overloading ****");

class Student {
    sid: number;
    sname: string;

    constructor();
    constructor(sid?: number, sname?: string);

    constructor(sid?: number, sname?: string) {
        this.sid = sid || 0;
        this.sname = sname || "Unknown";
    }

    getDetails(): string {
        return `Hello ${this.sname}, Welcome aboard! You have assigned ID no. ${this.sid}`;
    }
}

let person1 = new Student(101, "SB");
console.log(person1.getDetails());
let person2 = new Student();
console.log(person2.getDetails());