export { }

console.log("**** Practicing Named Functions ****");

console.log("\n**** Callback Function ****");

let greet = (name: string): void => {
    console.log(`Hello ${name}`);
}

let msg = (name: string, percent: number, callback: (name: string) => void): string => {
    callback(name);
    return `Congratulations ${name} on getting ${percent}%`;
}

console.log(msg('SB', 85, greet));