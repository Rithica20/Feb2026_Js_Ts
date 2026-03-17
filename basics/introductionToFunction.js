//functions in js

//named function :: resuable code/logic

// 1. Simple fuction :: has no input and no return 

//hoisting is possible with named function

function test(){
    console.log("ftesting");
}
test();

sum(); //hoisting is possible it is not good advice to use this

function sum(){
    console.log("a+b=c");
}
sum();

//2 . Function with input and no return

function add(a,b){ //here a and b is paramenters
    let c=a+b;
    console.log("sum is : "+c);
}

add(20,10); // here 10, 20 is arguments

/**
 * 
 * @param {string} peronName 
 */
//why we do this because js do give the method to acces if we declare it string we can acess inbuilt string methods
function getPersonName(peronName){
    console.log("this given person name is "+peronName);
    console.log(peronName.toUpperCase());
}

getPersonName("rithika");


//AC: create a function which will take a param
//param: browserName (string): chrome/firefox/edge/sfari
//return: true/false
//return true: if browser is available
//return false: if browser is not available, and print invalid browser

/**
 * 
 * @param {string} browserName 
 */

function broswer(browserName){
  switch(browserName.trim().toLowerCase()){
    case "chrome":
        console.log("chrome launched successfully");
        return true;
        break;

    case "firefox":
        console.log("firefox launched successfully");
        return true;
        break;
    
    case "edge":
        console.log("edge launched successfully");
        return true;
        break;

     case "safari":
        console.log("safari launched successfully");
        return true;
        break;  
        
     default:
        console.log("Invalid browser name"+browserName);
        return false;
        break;   

  }
}

broswer("chrome");