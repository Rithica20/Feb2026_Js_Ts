let broswer =['chrome', 'edge','firefor','opera','safari'];

//reverse using for of loop

let browserRev = new Array(broswer.length);
let index = broswer.length-1;
for(let ele of broswer){
    browserRev[index]=ele;
    index--;
}
console.log(browserRev);



//nested objects

let user = {
    name: 'tom',
    age: 30,
    address: {
        city: 'bangalore',
        pincode: '160055',
        area: {
            areaname: 'new area'
        }
    }
}

//iterate with for in loop

for( let ele in user){
    if(typeof user[ele] == "object"){
        for (let innerE in user[ele]){
            // console.log(innerE + ":" + user[ele][innerE]);
            if(typeof user[ele][innerE] == "object"){
                for( let dinE in user[ele][innerE]){
                    console.log(dinE + ":"+ user[ele][innerE][dinE]);
                }
            }else{
                console.log(innerE +":"+user[ele][innerE]);
            }
        }
    }
    else{
        console.log(ele +":" +user[ele]);
    }
}