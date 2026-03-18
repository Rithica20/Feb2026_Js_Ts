let broswer =['chrome', 'edge','firefor','opera','safari'];

//reverse using for of loop

let browserRev = new Array(broswer.length);
let index = broswer.length-1;
for(let ele of broswer){
    browserRev[index]=ele;
    index--;
}
console.log(browserRev);



//nested objects

let user = {
    name: 'tom',
    age: 30,
    address: {
        city: 'bangalore',
        pincode: '160055',
        area: {
            areaname: 'new area'
        }
    }
}

//iterate with for in loop

for( let ele in user){
    if(typeof user[ele] == "object"){
        for (let innerE in user[ele]){
            // console.log(innerE + ":" + user[ele][innerE]);
            if(typeof user[ele][innerE] == "object"){
                for( let dinE in user[ele][innerE]){
                    console.log(dinE + ":"+ user[ele][innerE][dinE]);
                }
            }else{
                console.log(innerE +":"+user[ele][innerE]);
            }
        }
    }
    else{
        console.log(ele +":" +user[ele]);
    }
}



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
       

    case "firefox":
        console.log("firefox launched successfully");
        return true;
       
    
    case "edge":
        console.log("edge launched successfully");
        return true;
       
     case "safari":
        console.log("safari launched successfully");
        return true;
     
        
     default:
        console.log("Invalid browser name"+browserName);
        return false;
        

  }
}

broswer("chrome");

//functionExpression.js
//WAF ::

//launch browser 
//switch case -- chrome, firefox, safari
//return true/false


//assert - browser is launched, please enter the url
//fail -- no url is launched since the browser is invalid, broswerName

/**
 * 
 * @param {string} browserName 
 * @returns 
 */

let browser = function broswerLaunch(browserName){
   
  switch(browserName.trim().toLowerCase()){
    case "chrome":
        return true;
        
    case "firefox":
        return true;     
    
    case "edge":
        return true;
        

     case "safari":
        return true;
        
     default:
        return false;
   
  }
  
}

let browserName = "chrome";

 if(browser(browserName)){
    console.log("the broswer" + browserName +"launched sucessfully");
    console.log("please enter the url");
  }else{
        console.log("Invalid browser name :"+browserName);
  }

// browser("chrome");


//Assigment from anonymous function.js

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

// assignment on arrow functions

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