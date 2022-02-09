arr=[1,2,3,6,7,8]
// create array if num<5 num+1 else num-1

var op=arr.map(num=>num>5?num+1:num-1)
console.log(op);

console.log("sum");
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);

console.log("max");
console.log( max=arr.reduce((n1,n2)=>n1>n2?n1:n2));

console.log("min");
console.log(min=arr.reduce((n1,n2)=>n1<n2?n1:n2));

