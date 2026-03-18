//functions with default paramenter will take default given value else will give undefined will not throw error 

let print = function person (perName){
    console.log("hi the person name is:: "+perName);
}

print(); // hi the person name is:: undefined //but in java it will give compile time error
print("rithika");

let print1 = function person1 (perName1 = "rithika"){
    console.log("hi the person name is:: "+perName1);
}

print1(); // here it will take default name ==>hi the person name is:: rithika

console.log("*****************************");

//Use case 1
//we can pass default time for element to load then we can change accrodingly

//use case 2
/**
 * 
 * @param {string} browserName 
 */
let broswerLaunch = function broswer(browserName){
    switch(browserName.trim().toLowerCase()){
        case "chrome":
            console.log("chrome launched sucessfully");
            break;
        case "firefox":
            console.log("firefox launched sucessfully");
            break;
        default:
            console.log("enter valid browser"+browserName);       
    }
}

broswerLaunch("chrome");

//use case 3 we can do this for QA,dev,stag,prod enviornments
/**
 * 
 * @param {string} envName 
 */
let envLaunch = function env(envName){
    switch(envName.trim().toLowerCase()){
        case "qa":
            console.log("qa launched sucessfully");
            break;
        case "dev":
            console.log("dev launched sucessfully");
            break;
        default:
            console.log("launch qa env sucessfully");  
    }
}

envLaunch("qa");