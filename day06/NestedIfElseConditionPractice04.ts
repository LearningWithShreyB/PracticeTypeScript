export { }

console.log("**** Check if a character is a vowel or consonant ****");

let ch: string = 'i';
console.log('The given character is: ' + ch);

if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
    console.log(`${ch} is a vowel.`);
}
else {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        console.log(`${ch} is a vowel.`);
    }
    else {
        console.log(`${ch} is a consonant.`);
    }
}
