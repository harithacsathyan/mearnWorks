var covid_data=[
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
var red=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
console.log(red);

  
// q2 district with higest 1 dose vaccination rate
console.log("district with higest 1 dose vaccination rate");

var greencity=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
var greenDist=covid_data.filter(d=>d[5]==greencity[5])
   console.log(greenDist);
// q3 district with lowest death cases

// q4 sort district with +ve cases

// q5 sort the districts based on 1st dose

// q6 is there any states with +ve cases > 60000

// q7 print trissur details

// q8 total number of +ve cases
console.log("total number of +ve cases");
var total=covid_data.map(data=>data[2]).reduce((data1,data2)=>data1+data2)
console.log(total);


// q9 total number of cured cases
console.log("total number of cured cases");
var total=covid_data.map(data=>data[4]).reduce((data1,data2)=>data1+data2)
console.log(total);
// q10 cured numbers of iduky

// console.log(covid_data.find(data=>data[1]=="iduky")[4]);

// q11 print all +ve cases
// console.log(covid_data.map(data=>[data[2],data[1]])); 