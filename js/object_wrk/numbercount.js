var arr=[10,20,30,10,40,50,20,30]
var nc={}
// for (let num of arr){
//     if(num in nc){
//         nc[num]+=1
//     }
//     else{
//         nc[num]=1
//     }

// }
// console.log(nc);


arr.map(num=>num in nc?nc[num]+=1:nc[num]=1)
console.log(nc);