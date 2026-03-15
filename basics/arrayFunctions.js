//reverse the array

let tpm = [ 'rit','fat','yuve', 'san'];

//2. using for loop

for(let i=tpm.length-1;i>=0;i--){
    console.log(tpm[i]);
}

//3. using for of loop

let tpmRev = new Array(tpm.length);
let index = tpm.length-1;

for(let ele of tpm){
    tpmRev[index] = ele;
    index--;
}
console.log(tpmRev);

//1. Using reverese function

let revTPm = tpm.reverse(); // this will modify the original array itself
console.log(revTPm);

console.log(tpm); //[ 'san', 'yuve', 'fat', 'rit' ]
