"use strict";
function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
console.log(sum);
// do  to install the typescript compiler
// tsc hello-world.ts to compile
// node hello-world.ts to run 
// Check the method signature. ensures the method only returns number  b?:NUMBER
function multiply(a, b, c) {
    if (b === void 0) { b = 1; }
    if (c === void 0) { c = 1; }
    return a * b * c;
}
sum = multiply(2, 2);
console.log(sum);
// TUPLE
var myArr;
myArr = [1, true];
// Default VALUES AND OPTIONAL
function sub(a, b, c) {
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    return a + b + c;
}
sum = sub(5, 2);
console.log(sum);
