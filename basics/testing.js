// To Check Bytecode
// node --print-bytecode yourfile.js
// Eg; node --print-bytecode testing.js

// To check optimization (TurboFan or Ignition)
// node --trace-opt dist/filename.js
// node --trace-opt basic/testing.js

let i = 10;
console.log(i);

function print() {
    console.log("Hello World");
}

// node --print-bytecode testing.js this will print bytecode

for(let a= 1; a<1000000000; a++) {
     print();
}


// To check optimization (TurboFan or Ignition) because this is a hot code and it will be optimized by V8 engine
// node --trace-opt dist/filename.js
// node --trace-opt basic/testing.js

//In package.json i have addes type=module insted of commonjs to run this file as module and to use import export in this file.
// When set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS. If you want to run this file as commonjs then remove type=module from package.json and use require instead of import.