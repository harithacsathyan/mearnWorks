var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:35},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
    

]
var maxWethr={}
for(let rcrd of data){
    let distName=rcrd["districtname"]//1.thissr 2.ekm....5.thrissr
    let crntTemp=rcrd["weather"]//1.29 2.32....5.32
    if(distName in maxWethr){ // *step 2 thrssr:29
        let oldTemp=maxWethr[distName] //29
        if(crntTemp>oldTemp){  //32>29
            maxWethr[distName]=crntTemp //thrisr:32
        }

    }
    else{
        maxWethr[distName]=crntTemp //* step 1  thrisr:29
    }

    
}
console.log(maxWethr);
// Object.entries ....to make object as array form
//highest weather
console.log(Object.entries(maxWethr).sort((r1,r2)=>r2[1]-r1[1])[0]);
