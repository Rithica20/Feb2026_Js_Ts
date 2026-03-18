let product = ['macbook', 'hp', 'lenovo'];


//for-of loop
//for-in loop // we can use for key value pairs 
//index based loop



//for-each loop


// product.forEach((ele) => {
//     console.log(ele);
//     if (ele === 'macbook') {
//         console.log('macbook found');
//         //break; - we cannot use break statement in foreach loop
//         //return true;
//     }
// })


product.some((ele) => {
    console.log(ele);
    if (ele === 'macbook') {
        console.log('macbook is found');
        return true;
    }
})


//some and foreach loop is same but only differnce is that you can break the loop in some but not in foreach loop