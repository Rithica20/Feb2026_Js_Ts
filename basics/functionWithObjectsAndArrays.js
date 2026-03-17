//functions with object and array

//object
function getProductdetails(productData) {

    console.log(productData);
    productData.price = '2000$';

}

let product = {
    name: 'macbook pro',
    brand: 'apple',
    stock: 'in-stock',
    price: '1000$'
}


getProductdetails(product); //call by reference


console.log(product.price);//2000$

//this is similar to to u1=u2 saying the refernce to point the same object
//u1 = u2; 


//array

/**
 * 
 * @param {string} empName 
 */
function getEmpDevices(empName) {

    let numberofDevices = [];

    switch (empName.trim().toLowerCase()) {
        case 'sahil':
            numberofDevices.push('macbook')
            numberofDevices.push('airtel')
            break;

        case 'rahul':
            numberofDevices.push('HP laptop')
            numberofDevices.push('jio')
            break;

        default:
            console.log('please pass the correct name:: ' + empName);
    }

    return numberofDevices;
}



let devicesVal = getEmpDevices('sahil');

console.log(devicesVal);
console.log(devicesVal.length);



//WAF:
//name :: getEmpDevices(empName)
//empName:: string
//return: Array -> collection of all the devices in an array

