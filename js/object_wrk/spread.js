console.log("add");
function add(...args){
    return args.reduce((n1,n2)=>n1+n2)
}
console.log(add(10,20,30));
//... is spread operator used for operator overloading
console.log("max");
function max(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(max(10,20,30));