export { }

console.log("**** Practicing Tuples ****");

console.log("\n**** Optional tuples ****");

function getUser(isAdmin: boolean): [number, string, string?] {

    if(isAdmin) {
        return [101, "John", "Admin"];
    }

    return [102, "Peter"];
}

console.log(getUser(true));
console.log(getUser(false));