export { }

console.log("**** Practicing Classes Concept in TypeScript ****");

console.log("\n**** Using the classes - Static Variables and Methods ****");

class Student {
    sid: number;
    sname: string;
    static collegeName = "Stephen's Academy";


    constructor(sid: number, sname: string) {
        this.sid = sid;
        this.sname = sname;
    }

    getDetails(): string {
        return `Hello ${this.sname}, Welcome aboard! You have assigned ID no. ${this.sid}`;
    }

    static collegeDetails(): string {
        return `All students belongs to ${Student.collegeName}`;
    }

}

let person1 = new Student(101, "SB");
console.log(person1.getDetails());

console.log(Student.collegeDetails());