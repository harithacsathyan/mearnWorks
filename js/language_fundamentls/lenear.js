var arr=[10,11,12,13,14,17,18,19]
var element=18;
var flag=0;
var count=1;
for (let num of arr){
    if(num==element){
        flag=1;
        break;
    }
    count++

}
console.log(flag==0?"nf":"found at",count+"th position");
// console.log(count);