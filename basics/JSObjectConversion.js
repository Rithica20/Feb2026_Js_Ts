let user = {
    name : "rithika",
    age: 25,
    city: "chennai"
}

console.log(user);
console.log(typeof user);


//to convert object to string we use this strinfy method it does --- Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
//this process is known as marshelling
let strUser = JSON.stringify(user);
console.log(strUser);
console.log(typeof strUser);

//To convert string into an object we use parse method it does ---Converts a JavaScript Object Notation (JSON) string into an object.
//this process is known as unmarshelling

let objUser = JSON.parse(strUser);
console.log(objUser);
console.log(typeof objUser);

// Second Example
let booksJson = `{
    "name" : "The pragmatic Programmer",
    "author" : "Andrew Hunt"
    }`;

let booksObject = JSON.parse(booksJson);
console.log(booksObject);
console.log(typeof booksObject);
