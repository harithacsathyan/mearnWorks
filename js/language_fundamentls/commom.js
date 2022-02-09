var arr1=[10,11,12,20,30,40]
var arr2=[11,20,21,22,30,40]
count=1;

var p1=0,p2=0
while((p1<arr1.length)&&(p2<arr2.length))
{
    if(arr1[p1]==arr2[p2])
    {
        console.log(`common element ${arr1[p1]}`);
        p1++;
        p2++;
    }
    else if(arr1[p1]<arr2[p2])
    {
        p1++;

    }
    else if(arr1[p1]>arr2[p2])
    {
        p2++;

    }
    count++

}
console.log("itration",count);