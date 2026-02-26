// let 
// scope :: block scope
// redeclaration :: not allowed
// reassignment :: allowed
// hoisting :: not allowed

// let is a block scoped variable declaration. It is not hoisted and cannot be re-declared in the same scope. 
// It can be updated but not re-declared. It is recommended to use let instead of var to avoid bugs and confusion in code.
let pop = "India";
let x = 20;
function letExample() {
    console.log(pop); // Output: India
    console.log(x);// Cannot access 'b' before initialization this is an error beacuase it is considering the below let 
    let x = 10;
    console.log(x); // Output: 10
    if (true) {
        let x = 20; // This will not overwrite the previous value of x it takes the below value of x and it is block scoped
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}
letExample();

// 2. Redeclaration is not allowed 
    let a = "rithika";
    // let a = " ruckmani"; // This will give an error because redeclaration is not allowed

// 3. Hoisting is not allowed
    console.log(b); // Cannot access 'b' before initialization This will give an error because hoisting is not allowed
    let b = 10; 