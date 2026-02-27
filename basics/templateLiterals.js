// template literal or backtick is a new feature in js that allows us to create multi-line strings and embed expressions in strings

// before template literals we used to create multi-line strings using concatenation or escape characters

let about = ` This is rithika
I am a software engineer
I love coding`;

//console.log(about); // Output: This is rithika I am a software engineer I love coding

//first way 
let m1= 'it\'s my code';
console.log(m1); // Output: it's my code    

//second way    
let m2 = "it's my code";   
console.log(m2); // Output: it's my code

//third way
let m3 = `it's my code`; // this is prefered way to write string because we don't have to use escape character and it is more readable
console.log(m3); // Output: it's my code

// exception case in string if we have backtick in the string then we have to use escape character
let m4 = `it\`s my code`;//rare case
console.log(m4); // Output: it`s my code




//placeholder in template literals {}
let empname = "rithika";
console.log(`My name is ${empname}`); // Output: My name is rithika

// we can also use expressions in template literals
let a = 10;
let b = 20;
console.log(`The sum of a and b is ${a + b}`); // Output: The sum of a and b is 30

