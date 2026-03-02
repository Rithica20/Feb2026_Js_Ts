//JavaScript has only 8 falsy values:
//false
//0
//-0
//0n (BigInt zero)
//"" (empty string)
//null
//undefined
//NaN

// Except these 8 falsy values, all other values are considered truthy in JavaScript.

if (NaN) {//false
    console.log('bye');
}
else {
    console.log('hi');
}

if (1.1) {
    console.log('hello');
}

if ('admin') {
    console.log("i am the admin");
}

if ([]) {
    console.log('PASS');
} else {
    console.log('Fail');
}


if ('') { //fail -- empty string
    console.log('PASS');
} else {
    console.log('Fail');
}

let browser = 'chrome';

if (browser) {
    console.log('open chrome browser');
} else {
    console.log('open edge browser')
}


if ({}) {
    console.log('empty curly braces');
} else {
    console.log('fail')
}