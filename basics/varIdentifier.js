// var, let,const

//var: it is old way of declaring variable, it is function scoped and can be re-declared and updated. 
// It is hoisted to the top of the scope but not initialized. It can lead to bugs and confusion in code.

//let: it is block scoped and can be updated but not re-declared. It is also hoisted to the top of the 
// scope but not initialized. It is recommended to use let instead of var to avoid bugs and confusion in code.

//const: it is block scoped and cannot be updated or re-declared. It is also hoisted to the top of 
// the scope but not initialized. It is recommended to use const for variables that should not be changed.

// In JavaScript, variable declarations are hoisted to the top of their scope. However, only the 
// declaration is hoisted, not the initialization. This means that if you try to access a variable before it is declared, 
// you will get a ReferenceError for let and const, but for var, it will return undefined.

// 1.var

//global scope
var x = 10;
//function scope if we declare var a=20 inside the function then it will take 20 as a value for all the a
function varExample() {
    var x = 10;
    // console.log(x); // Output: 10
    if (true) {
        var x = 20; // This will overwrite the previous value of x it takes the below value of x and it is function scoped
        console.log(x); // Output: 10

        var x = 30; // This will overwrite the previous value of x 
        console.log(x); // Output: 30
    }
    console.log(x); // Output: 30
}
console.log(x); // Output: 30
varExample();
console.log(x); // Output: 10

// 2. Redeclaration and Reassignment is allowed

var a = "rithika";
var a = " ruckmani";
console.log(a); // Output: " ruckmani"

// 3. Hoisting is allowed 
// Hoisting means we are able to access the variable before it is declared.
console.log(b); // Output: undefined // In java it will give compiler error but in js it will give undefined because of hoisting
var b = 10;