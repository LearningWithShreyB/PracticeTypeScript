console.log("**** Practicing Module Concept in TypeScript ****");

console.log("\n**** Export method ****");

export let a: string = "Have an amazing fun at learning Typescript";

export let m1 = (): void => {
    console.log("This is m1() method");
}

export class Length {
    static len(str: string): number {
        return str.length;
    }
}