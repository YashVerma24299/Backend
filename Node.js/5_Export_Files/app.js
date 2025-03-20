// require() -> A built-in fn to include external modules that exist in separate files.

let value = require("./math");
console.log(value);
console.log(value.summ(8,99));
console.log(value.gg);

 
//From 5_Practice
let val = require("../5_Practice/index.js");
console.log(val);
console.log(val[0].color);