arr=[10,11,12,13,14,15]
// square
console.log("square");

var squares=arr.map(num=>num**2)
console.log(squares);
// cube
console.log("cube");
var cube=arr.map(num=>num**3)
console.log(cube);
// even number
console.log("even number");
console.log(arr.filter(num=>num%2==0));
// number greater than 12
console.log("number greater than 12");
console.log(arr.filter(num=>num>12));
// square using foreach
console.log("square");
arr.map(num=>num**2).forEach(num=>console.log(num))


