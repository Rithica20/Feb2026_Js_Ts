let num = 342524563656456676756 * 22;
console.log(num);


console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

// let number = 9007199254740991;
// let c = number + 2;
// console.log(c);


let number = 10n;
console.log(typeof (number)); //bigint


//console.log(number + 1);//Cannot mix BigInt and other types, use explicit conversions

console.log(10n + 20n * 1n);


console.log(Number.MAX_VALUE); //1.7976931348623157e+308