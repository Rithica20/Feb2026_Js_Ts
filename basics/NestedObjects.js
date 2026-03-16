//object


let details = {
    name: "rithika",
    age: 25,
    isEmployed: true,
    city: "chennai"
}

for( let dt in details){
 if(details[dt] == "chennai"){
    console.log(dt);
 }
}


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

// console.log(user.age);
// console.log(user.address.pincode);
// console.log(user.address.area.areaname);

//iterate using for in loop

// for( let ele in user){
//     console.log(ele +":" +user[ele]);
    
// }

// for( let ele in user){
//     if(typeof user[ele] == "object"){
//         for (let innerE in user[ele]){
//             console.log(innerE + ":" + user[ele][innerE]);
//         }
//     }
//     else{
//         console.log(ele +":" +user[ele]);
//     }
// }

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

//for meaningfull variable names 

for (let key in user) {

    if (typeof user[key] === "object") {

        for (let innerKey in user[key]) {

            if (typeof user[key][innerKey] === "object") {

                for (let deepKey in user[key][innerKey]) {
                    console.log(deepKey + ":" + user[key][innerKey][deepKey]);
                }

            } else {
                console.log(innerKey + ":" + user[key][innerKey]);
            }

        }

    } else {
        console.log(key + ":" + user[key]);
    }

}