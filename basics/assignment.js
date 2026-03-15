let broswer =['chrome', 'edge','firefor','opera','safari'];

//reverse using for of loop

let browserRev = new Array(broswer.length);
let index = broswer.length-1;
for(let ele of broswer){
    browserRev[index]=ele;
    index--;
}
console.log(browserRev);