console.log("Hello World");

console.log(10); // this will print the next line
// this is equal to system.out.println in java

process.stdout.write("Hello"); // this will print in the same line
// this is equal to system.out.print in java

console.log("World");

let path = 'C:\\Users\\Admin\\Desktop\\javascript\\basics\\basic.js';
console.log(path); // C:\Users\Admin\Desktop\javascript\basics\basic.js
// because here one backslash is treated as escape charcacter

let path1 = `C:\\Users\\Admin\\Desktop\\javascript\\basics\\basic.js`;
console.log(path1); // C:\Users\Admin\Desktop\javascript\basics\basic.js

// to print it as string 
let path3 = String.raw`C:\Users\Admin\Desktop\javascript\basics\basic.js`;
console.log(path3); 
// this will treat it as entire string

