let user = {
    name : "rithika",
    age: 25,
    city: "chennai"
}

let cpyUser = {...user};
console.log(cpyUser); // it is not pointing to the same object it is creating own object and it will not modify the exisitng object
console.log(typeof user);

cpyUser.city = "paris";

console.log(cpyUser);
console.log(user);

let u1 = {
    name: 'rithika',
    age: 20
}

let u2 = u1; //here it is pointing to the same object 

u2.age = 22;
console.log(u2);
console.log(u1);

//is there any limit to create the number of references in the stack memory - we can have 'n' number of references.