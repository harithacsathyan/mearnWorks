var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]
// print number >10

// arr.filter(num=>num>10).forEach(num=>console.log(num))
arr.flat().filter(num=>num>10).forEach(num=>console.log(num))
// to flat that array
// var flatarr=[]
// for(let subarr of arr){
//     for (let num of subarr){
//         flatarr.push(num)
//     }
// }
// flatarr.filter(num=>num>10).forEach(num=>console.log(num))