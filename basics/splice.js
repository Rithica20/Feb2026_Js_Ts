let arr =['selenium','cypress','playwright','javascript','java','python'];

//remove element 1  from index 2
let a1 = arr.splice(2,1); // 2 is the index and 1 is the number of elements to be deleted from that index
console.log(arr); //['selenium','cypress','javascript','java','python']
console.log(a1); //this will return deleted element ['playwright']

