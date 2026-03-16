
let user = {
    name : "rithika",
    age: 25,
    city: "chennai"
}

//to print key with for in loop

for( let e in user){
    console.log(e);
}

//to print value with for in loop

for(let e in user){
    console.log(user[e]);
}

//to print keys with keysmethod

let userKey =Object.keys(user);
console.log(userKey);
console.log(userKey.length);

//to print values with value method

let userValue = Object.values(user);
console.log(userValue);
console.log(userValue.length);

// with entries method
//this method key value pairs of an array with ennjmberable object
let userPair = Object.entries(user);
console.log(userPair);

