//for comparison
//== loose equality operator :: value comparison
//=== strict equality operator :: value and type comparison

//if statement

let a1 = "18";
let a2 = 18;
console.log(a1==a2); //true
console.log(a1===a2); //false

console.log(true==1); //true
console.log(true===1); //false

console.log(false==0); //true
console.log(false===0); //false

console.log([]==0); //true
// console.log([]===0);// we can't even do this 

//important
console.log(null==undefined)//true

console.log(typeof(null));//object
console.log(typeof(undefined));//undefined

console.log(null===undefined)//false it is comparing object and undefined

if(null==undefined){
    console.log("null and undefined are equal");
}else{
    console.log("null and undefined are not equal");
}//output: null and undefined are equal

if(null===undefined){
    console.log("null and undefined are strictly equal");
}else{
    console.log("null and undefined are not strictly equal");
}//output: null and undefined are not strictly equal    

let marks=98;

if(marks>=90){
    console.log("Grade A");
    if(marks>=95){
        console.log("Excellent");
    }else{
        console.log("Good");
    }
}else {
    if(marks>=80){  
    console.log("Grade B");
}else if(marks>=70){
    console.log("Grade C");     
}
}
