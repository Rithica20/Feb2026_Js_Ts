//true=1
//false=0

if(1){
    console.log("This is true");
}
else{ //dead code or unreachable code because it will never execute
    console.log("This is false");
}

console.log(1+false); // Output: 1 because false is treated as 0
console.log('1'+false)// Output: 1false because when we add a string and a boolean it will convert the boolean to string and concatenate them
console.log(1-false); // Output: 1 because false is treated as 0
console.log('1'-false)// Output: 1 because when we subtract a string and a boolean it will convert the string to number and the boolean to number and then perform the subtraction
console.log('ture'-true)// Output: NaN because when we subtract a string and a boolean it will convert the string to number and the boolean to number and then perform the subtraction but in this case the string cannot be converted to number so it will return NaN