// switch case - most used in cross browser logic 


//use cases for switch case:
//1. cross browser logic
//2. cross os/platforms: win/linux/mac
//3. cross system: local, remote
//4. cross environment: dev/qa/stage/uat/prod
//5. RBAC:(role based accessibilty condition) user permission: admin, customer, seller, partner, vendor, distributor, guest
//6. locator strategy: id, name, role, text, xpath, css
//7. testing type: sanity, smoke, regression, ui, api, mobile
//8. uber app: booking type: mini, sedan, suv, bike
//9. payment: upi, paypal, cc, debit, wire, stripe, cash
//10. loan type: home: 8%, car: 10%, edu: 6%

//why we use dont use if-else:
//because if else we can use only for 2-3 conditions but when we have more than 3 conditions then it becomes difficult to read and 
// maintain the code and also it becomes less efficient because it will check all the conditions one by one until it finds the matching condition but 
// in switch case it will directly jump to the matching case and execute the code and then break the switch case.
let browser = 'chrom';
switch(browser.trim().toLowerCase()) {
    case 'chrome':
        console.log('open chrome browser');
        break;
    case 'edge':
        console.log('open edge browser');
        break;
    case 'firefox':
        console.log('open firefox browser');
        break;
    default:
        console.log('please pass the correct browser name'+browser);
}