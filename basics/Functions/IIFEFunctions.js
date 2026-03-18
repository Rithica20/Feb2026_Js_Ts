//IIFE => immediately invoked fucntions : it is also part of anonymous function

(function (){
    console.log("this is my IIFE functions");
})();

// let a = (function (){ //Unexpected end of input  at compileSourceTextModule 
//    // you can assign it to a function expression
//     console.log("this is my IIFE functions");
// })();
// a(); 


(function(a,b){
    let c = a+b;
    console.log("sum is "+c);
})(10,20);

let reC = (function(a,b){ // here this is not function expression here we are returning one value if we are retuning some value means we need to get it for that i have assigned it with placeholder so it is not function expression this placeholder i can use for assertions
    let c = a+b;
    console.log("sum is "+c);
    return c;
})(10,20);

console.log(reC);

//Example3
(function (name) {
    console.log('Hi this is:: ' + name);
})('sahil');

//Example4
let s1 = (function (a, b) {   //s1 is not fucntion expression, it is just a veriable to hold the value what we are returning.
    let sum = a + b;
    return sum;

})(10, 20);

console.log(s1);