export { }

console.log("**** Practicing Classes Concept in TypeScript ****");

console.log("\n**** Using the classes for readonly and optional property ****");

class Student {
    readonly sid: number;
    sname: string;
    semail?: string;

    constructor(sid: number, sname: string, semail?: string) {
        this.sid = sid;
        this.sname = sname;
        this.semail = semail;
    }

    getDetails(): string {
        return `
        Student ID   : ${this.sid}
        Student Name : ${this.sname}
        Email        : ${this.semail ?? "Not Provided"}`;
    }
}

let person1 = new Student(101, "SB");
console.log(person1.getDetails());

//person1.sid=102;     Not able to do due to readonly property

let person2 = new Student(102, "VB", "vb@gmail.com");
console.log(person2.getDetails());