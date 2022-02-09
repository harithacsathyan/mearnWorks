var arr=[10,11,12,13,14,17,18,19]
var element=15;
var flag=0;
var count=1;
var low=0,upp=arr.length-1;
while(low<=upp)
{
    var mid=Math.floor((low+upp)/2)
    if(element>arr[mid])
    {
        low=mid+1;
    }
    else if(element<arr[mid])
    {
        upp=mid-1;
    }
    
    else if(element==arr[mid])
    {
        flag=1;
        break;    
    }
    count++;

}
console.log(count);

console.log(flag==0?"not found":"found");