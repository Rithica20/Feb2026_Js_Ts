// arrow funtion is also a kind of anonymous function with no function name with arrow notation
//but here we can skip function keyword as well

let s = () =>{
    console.log("here is my arrow function");
}
s();

//in java for a if satement it has only one line means we can direlty declare in one linw withour using block 

// like that here also we can do

let a = () => console.log("this is my one line arrow function");

a();

//parameter arrow functions

// let b = (num) => num %2 === 0;
// let result = b(2);
// console.log(result);

let b = num => num %2 === 0; // if u have only one parameter u can declare without bracket
let result = b(2);
console.log(result);

let sum = (a,b) => a+b; //in a single line u can have without return as well

let res = sum(10,20);
console.log(res);

//assignment cross broswe

/**
 * 
 * @param {string} broswerName 
 */
let browLaunch = (broswerName) =>{
    switch(broswerName.trim().toLowerCase()){
        case "chrome":
            console.log("chrome launched sucessfully");
            break;
        case "firefox":
            console.log("firefox launched sucessfully");
            break;
        case "edge":
            console.log("edge launched sucessfully");
            break;
        default:
            console.log("enter valid browser name:"+broswerName);       
    }
}

browLaunch("ione");