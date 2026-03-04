//arrya - array is  collections of multiple elements in a single variable also this size dynamic in nature
//where as in java array is a collection of similar type of elements it is fixed in size

// in java wwe declare like int[] num ={1,2,3,4,5};

// in js we can declare like this:
let num = ['rit',24,'f']; // 1st way of declaring an array
console.log(num);
console.log(typeof(num)); //object

//diff ways of declaring an array

let arr = [];
console.log(arr.length);
console.log(arr);

//getting the length of the array:

let arr1 =[10,20,30,40,50];//2nd way of declaring an array
console.log(arr1.length); //5

//lowest index=0 and highest index = 5 so +1 so legth is 5

//accessing the elements from the array:
console.log(arr1[0]);//10
console.log(arr1[4]);//50
console.log(arr1[5]);//undefined //but in java we will get ArrayIndexOutOfBoundsException

//array constuctor:
let a = new Array(); //3rd way of declaring an array
console.log(a);

let b= Array.of(1,2,3,4,5); //4th way of declaring an array 
console.log(b);//[1,2,3,4,5]

// javascript arrays are dynamic in nature

//add elements in the array:

let arr5 = [10,20,30,40,50];

arr5.push(60); // this will add 60 at the end of the array
console.log(arr5); //[10,20,30,40,50,60]

arr5.unshift(0); // this will add 0 at the beginning of the array
console.log(arr5); //[0,10,20,30,40,50,60]  

arr5.splice(3,0,25); // this will add 25 at index 3 and delete 0 elements
console.log(arr5); //[0,10,20,25,30,40,50,60]

//delete elements from the array:

arr5.pop(); // this will delete the last element from the array
console.log(arr5); //[0,10,20,25,30,40,50]

arr5.shift(); // this will delete the first element from the array
console.log(arr5); //[10,20,25,30,40,50]

arr5.splice(3,1); // this will delete 1 element from index 3
console.log(arr5); //[10,20,25,40,50]


//print the elements of the array using for loop:

//using index based loop
for(let i=0;i<arr5.length;i++){
    console.log(arr5[i]);
}

//using for of loop
for (let ele of arr5) {
    console.log(ele);
}

// reverse the array

let arrName = ['rithika', 'sahil', 'mani', 'syed'];

//1, using index based loop

for(let i=arrName.length-1;i>=0;i--){
    console.log(arrName[i]);
}

// 2. using reverse method

let ab = arrName.reverse();
console.log(ab);

// 3. using for..of loop //homework

let arrNameRev= new Array(arrName.length);
let index = arrName.length-1;

for( let ele of arrName){
    arrNameRev[index] = ele;    
    index--;
    console.log(ele);
}

//Joining arrays
//Adds all the elements of an array into a string, separated by the specified separator string.
let words =['hello','world','welcome','to','javascript'];
let w = words.join('-'); // this will join all the elements of the array with '-' in between

console.log(w);

let w2 = words.join(','); // this will join all the elements of the array with ',' in between

console.log(w2);

//copying and combining using spread operator ...

let arr6 = [1,2,3];
let arr7 =[...arr6]; // this will copy all the elements of arr6 to arr7
console.log(arr7);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [...a1,...a2]; // this will combine all the elements of a1 and a2 to a3
console.log(a3);

//split in javascript

let str= "I_am_rithika_qa_engineer"

let strArr= str.split('_'); // this will split the string into an array based on the separator '_' and will return an array of strings
console.log(strArr); // ['I','am','rithika','qa','engineer']

//Important interview question

let test="aAseleniumAaAplaywrihghtAAaAautomationaAA";
let t = test.split("aA");
console.log(t[0]); // this will return empty string coz 0th index has nothing so it will return empty string

let data = 'tom;30;12;true;LA';
let d = data.split(";");
console.log(d);


let dt = 'javascript is a funny lang';
console.log(dt.split('funny')[0]); //javascript is a 
console.log(dt.split('funny')[1]); // lang

//Array constructor

let arr8 = new Array(5); // this will create an array of length 5 without any elements in it
console.log(arr8); //[ <5 empty items> ]
console.log(arr8.length); //5
arr8[0] = 10;
console.log(arr8)//[ 10, <4 empty items> ]