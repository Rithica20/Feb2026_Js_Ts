// Object in JS:=> Object is a collection of key-value pairs. 
//key is in string format and value can be of any data type.

// creating a object

let details = { 
    name : "rithika",
    age : 22,
    city : "Chennai",
    isEmpolyed : true
}

//print 
console.log(details);

//accessing the value from object
console.log(details.name);
console.log(details.age);

console.log(details['age']);

//try to acces unavailable key
console.log(details.salary); //undefined

//type
console.log(typeof details);

//add,update,delete properties of the object
//adding a property

details.country= "India";

console.log(details.country);

//update
 details.age = 25;

 console.log(details.age);
  
//delete the property

delete details.isEmpolyed;

console.log(details);

details = null; // Assigning the value as null

console.log(details.age); // acessing the value in java we will get Null pointer but in JS we will get error with undefined
//TypeError: Cannot read properties of null (reading 'age')

//Iterate the object

//1. Using for in loop

for(let ele in details){
    console.log(`${ele} : ${details[ele]}`);
}

