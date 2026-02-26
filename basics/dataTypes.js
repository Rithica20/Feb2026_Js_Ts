// datatypes are mostly used tio the that partiv=cular type of data in memory
//primitives data types in js

 //size of number is 8 bytes and it can store both integer and floating point numbers
let b = 10;
let z = 10.5; 
console.log(typeof(z)); // Output: number
console.log(typeof(b)); // Output: number

// size of string is 2 bytes per character
let a ="India";
console.log(typeof(a));// Output: string
let initial = 'a';
 console.log(typeof(initial)); // Output: string


let flag = true;
console.log(typeof(flag)); // Output: boolean

let driver = null;
console.log(typeof(driver)); // Output: object this is a bug in js it should be null but it is object

// undefined means the variable is declared but not initialized
let e = undefined;
console.log(typeof(e)); // Output: undefined

let f = Symbol("symbol");
console.log(typeof(f));

let g = BigInt(1234567890123456789012345678901234567890);
console.log(typeof(g)); 

let ab='';
console.log(typeof(ab)); // Output: string

// non-primitive data types in js

//object, classes, array, function, enum , interface



let name = "rithika";

console.log(name);// name  it is a reserved keyword

// this is the backtick concepet it is used for printing the variable in the string without using concatenation

let empname = "rithika";
console.log(empname); // Output: rithika

console.log(`here is the ${empname} with proper name`); // Output: here is the rithika

