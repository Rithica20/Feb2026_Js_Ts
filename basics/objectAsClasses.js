//creating the object using classes in latest :Es6


class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
}

//creating no reference object

new Product("iphone",2000);
//if we dont have ref mean it will lying in heap memory this grabage collector will kill no ref and null ref object first.

//with ref object

let p1 = new Product("mac",1000);
console.log(p1);
console.log(p1.name);
console.log(p1.price);

console.log(typeof Product);//function
console.log(typeof p1); //object

// In java we have a manual method System.gc to call garbage collector
//but in JS we dont have any predef method to call GC

let p2 = new Product("samsung",100).name; //Only the name property value is stored.
console.log(p2);
console.log(typeof p2); //string

let a1 = {
    name: "rithika",
    age:25,
    isActive: true
}


let a2 = {
    name: "sudhakar",
    age:32,
    isActive: true
}


let a3 = {
    name: "shanu",
    age:10,
    isActive: false
}

a1=a2;
console.log(a1); //sudhakar
console.log(a2); //sudhakar

a2=a3;

console.log(a2);//shanu
console.log(a3);//shanu

a1=a2=a3;

console.log(a1);//shanu
console.log(a2);//shanu
console.log(a3);//shanu


