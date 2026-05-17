export { }

console.log("**** Practicing Classes Concept in TypeScript ****");

console.log("\n**** Using the classes for readonly property ****");

class Student {
    readonly sid: number;
    sname: string;

    constructor(sid: number, sname: string) {
        this.sid = sid;
        this.sname = sname;
    }

    getDetails(): string {
        return `Hello ${this.sname}, Welcome aboard! You have assigned ID no. ${this.sid}`;
    }
}

let person1 = new Student(101, "SB");
console.log(person1.getDetails());

//person1.sid=102;     Not able to do due to readonly property