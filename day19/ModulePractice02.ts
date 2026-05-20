console.log("**** Practicing Module Concept in TypeScript ****");

console.log("\n**** import method ****");

import * as utils from "./ModulePractice01"

console.log(`The variable value is ${utils.a}`);

utils.m1();

console.log(`The class implementation is ${utils.Length.len("Bye SB!!")}`);