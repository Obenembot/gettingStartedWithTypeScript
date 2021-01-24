

function add(a: number, b:number) {
    return a + b;
}

var sum = add(1, 2)

console.log(sum)

// do  to install the typescript compiler
// tsc hello-world.ts to compile
// node hello-world.ts to run 

// Check the method signature. ensures the method only returns number  b?:NUMBER
function multiply(a: number, b : number =1, c: number = 1): number {

    return a * b * c;
}

sum = multiply(2, 2);
console.log(sum)


// TUPLE
var myArr: [number, true];

myArr = [1, true]
// Default VALUES AND OPTIONAL
function sub(a: number, b: number=0, c = 0) : number{
    return a + b + c;
}
sum = sub(5, 2);

console.log(sum)