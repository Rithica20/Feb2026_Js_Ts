//anonymous function are functions that does not have any name 
// we can not hoist the anonymous functions
let funExpreVar = function(){ // here we need to use mandatory external varaible 
 console.log("here is your anonymous functions")
}
// sum(); //Cannot access 'sum' before initialization. 
funExpreVar();
console.log(funExpreVar.name); //this will print internal name but here internal name is also funExpreVar

let sum = function(a,b){

    let c = a+b;
    console.log( " the sum is :"+c);
}

sum(10,20);

//Assigment

/**
 * 
 * @param {string} browserName 
 */
let broswerLaunch = function(browserName){
    switch(browserName.trim().toLowerCase()){
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
            console.log("enter valid browser name:"+browserName);       
    }
}

broswerLaunch("aaa");