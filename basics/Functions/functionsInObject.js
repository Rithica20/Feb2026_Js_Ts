//functions in objects
//object is key,value pair
// function do have certian behaviour or the set of actions
// ion objects we can have named fucntions, anonymous functions, arrow functions

let a = {
    name : "rithika",
    age: 25,
    isEmployed : true,
    hasDevices: ["macbook", "s23"],

    //I am writing a named function in between
     namedFun: function namedFunc(){    // here namedFun is the variable wwe can assign variable like this
        console.log("i have written named funciton inside the object");
     }, 

     //anonymous functions
     /**
      * 
      * @param {string} oneDevice 
      * @returns 
      */
     device(oneDevice){
        console.log("you have these devices....."+ this.hasDevices);
        let allDevices = this.hasDevices+ oneDevice;
        console.log(`all the devices that user has is ${this.hasDevices + oneDevice}`)
        return allDevices;

     },

     //arrow functions
     /**
      * 
      * @param {string} uAge 
      */

     usAge : (uAge)=> {
            console.log(`${a.age} is the current age of the user`) // remember for arrow function we cannot use this keyworkd insted we need to write it as varname.key
            console.log(`${uAge} is the age of the user in next year`);
     }
}


console.log(a.name);
console.log(a["age"]);
a.namedFun(); //calling a named fucntions inside the object
let alldev = a.device("airpod pro"); // for anonymous functions
console.log(alldev);
a.usAge(26); //calling arrow function

//Object :: Key-value pair
//functions(behaviour) - actions


//- named function 
// - anonymous functions
// - arrow functions

let user = {
    name: 'sahil',
    age: 30,
    devices: ['macbook', 'apple'],
    salary: 100,

    coding: function code() {
        console.log(`${this.name} is writing the code`);
    },

    print(ctc) {
        console.log('your ctc is:: ' + ctc);
        let totalSalry = ctc + this.salary;
        return totalSalry;
    },

    //for arrow function we need to write the object.property name

    /**
     * 
     * @param {number} speed 
     */
    walking: (speed) => {
        console.log(`${user.name} is driving the carat ${speed}`);



    },


    /**
     * 
     * @param {string} sportname 
     */
    playing: function (sportname) {
        console.log(`${this.name} like ${sportname}`);

        this.walking(20);

    }




}

console.log(user.name);
console.log(user['age']);
user.coding();
let totalSal = user.print(200);
console.log('total salry is:: ' + totalSal);
user.walking('10');

user.playing('cricket');




