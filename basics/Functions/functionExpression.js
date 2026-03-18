//this is like we do alias in sql 
//similarly we can do here whenever we have big function name we do assing it to variable with short name
//then you start calling it with the varaible name
//this method is called as external name


let login = function logintithuserandpassword() { //this is internal name
    console.log('you are my trainer');
}

login(); //external name

// logintithuserandpassword(); //-- ReferenceError: logintithuserandpassword is not defined
//because once we assign external name we need need call with external name only then it will show this error

console.log(login.name); //it will print the internal name of the function

let add = function addTwoNumber(a, b) {
    let sum = a + b;
    return sum;
}

let s = add(10, 20);
console.log('sum is ::' + s);

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
