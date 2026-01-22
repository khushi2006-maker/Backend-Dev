const stringUtils = require("./stringutils");

const text = "Hello Node Js";

console.log("Capitalized:", stringUtils.capitalizeString(text));
console.log("Reversed:", stringUtils.reverseString(text));
console.log("Vowel Count:", stringUtils.countVowels(text));