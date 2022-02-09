var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]
// num,dist,+ve,death,cured,1st dose,2nd dose

// q1 higest test + ve case district
console.log("higest test + ve case district");
coivd_data.sort((data1,data2)=>data2[2]-data1[2])
console.log(coivd_data[0]);


// q2 district with higest 1 dose vaccination rate
console.log("higest 1 dose vaccination rate");
coivd_data.sort((data1,data2)=>data2[5]-data1[5])
console.log(coivd_data[0]);

   
// q3 district with lowest death cases
console.log("district with lowest death cases");
coivd_data.sort((data1,data2)=>data1[3]-data2[3])
console.log(coivd_data[0]);


// q4 sort district with +ve cases
console.log("sort district with +ve cases");
coivd_data.sort((data1,data2)=>data1[2]-data2[2])
console.log(coivd_data);



// q5 sort the districts based on 1st dose
console.log("sort the districts based on 1st dose");
coivd_data.sort((data1,data2)=>data1[5]-data2[5])
console.log(coivd_data);


// q6 is there any states with +ve cases > 60000
console.log("states with +ve cases > 60000");

for(let data of coivd_data)
{
    if(data[2]>60000)
    {
        console.log(data);
    }
}


// q7 print trissur details
console.log("thrissur details");

for(let data of coivd_data)
{
    if(data[1]=="thrissur")
    {
        console.log(data);
    }
}


// q8 total number of +ve cases
// console.log("total number of +ve cases");

for(let data of coivd_data)
{
}



// q9 total number of cured cases


// q10 cured numbers of iduky
console.log("cured numbers of iduky");

for(let data of coivd_data)
{
    if(data[1]=="iduky")
    {
        console.log(data[4]);
    }
}
