export { }

console.log("**** Check if a character is an uppercase vowel ****");

let ch: string = 'i';
console.log('The given character is: ' + ch);

if (ch === ch.toUpperCase()) {
    if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
        console.log(`${ch} is an uppercase vowel.`);
    }
}
else {
    console.log(`The character is not eligible.`);
}