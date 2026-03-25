//callback :: passing the function name to another function as a parameter
//call a function by passing the function name


//arow functions
let sum = (a,b) => a+b;
let diff = (a,b) => a-b;
let multi = (a,b) => a*b;
let divi = (a,b) => a/b;


function calc(funcName, a, b){ 
    console.log("using two numbers");
    return funcName(a,b);
 
}

let res = calc(sum, 10,20); // here sum is the call back function and calc is the called function
console.log(res);

let ress = calc(diff, 10,20); // here diff is the call back function and calc is the called function
console.log(ress);

console.log("=================================")

let addition = function (a, b) {
    return a + b;
}

console.log("=================================")


function doSomething(funcName, url) {
    console.log('entering the url:: ' + url);
    funcName();
}

doSomething(() => {
    console.log('launch url')
}, 'https://www.google.com');


function startMachine(callback) {
    console.log('string the machine');
    callback();
}


startMachine(() => {
    console.log('done');
})


startMachine(function () {
    console.log('start');
})

startMachine(function code() {
    console.log('coding');
})

console.log("=========================");

function getInfo(callback) {
    console.log('getting some info...');
    callback();
}

getInfo(() => { });


function getMyDetails(callback) {
    console.log('getting some details....');
    callback('selenium');
}

getMyDetails((x) => {
    console.log(x);
});


function getMarks(callback) {
    console.log('hi getting the marks.....');
    callback(200);
    return 500;
}


let p = getMarks((num) => {
    console.log('number is::' + num);
})

console.log('p val;ue is:: ' + p);


function openPage(url, callback) {
    console.log('app url:' + url);
    let browser = callback('Amazon Login Page');
    console.log(browser);
    return true;
}

let flag = openPage('https://www.amazon.com', (title) => {
    console.log('getting the page title.....' + title);
    return 'chrome';
});


setTimeout(() => {
    console.log('print this line')
}, 3000);


basics/Functions/functionsInObject.js
basics/callBack.js