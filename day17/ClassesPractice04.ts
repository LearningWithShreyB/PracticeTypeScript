export { }

console.log("**** Practicing Classes Concept in TypeScript ****");

console.log("\n**** Using the classes - Static Variables ****");

class Student {
    sid: number;
    sname: string;
    static schoolName:string="Greenlands High School";

    constructor(sid: number, sname: string) {
        this.sid = sid;
        this.sname = sname;
    }

    getDetails(): string {
        return `Hello ${this.sname}, Welcome aboard! You have assigned ID no. ${this.sid} and coming from ${Student.schoolName}`;
    }
}

let person1 = new Student(101, "SB");
console.log(person1.getDetails());