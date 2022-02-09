var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
// // //1. print all employeee
// for(let employee of employees)
// // {
//     console.log(employee[1]);
// // }

// // //2. number of employees
// console.log(employees.length);

// *****filter******

// // //3. print developer only
// for(let employee of employees)
// {
//     if(employee[2]=="developer")
//     {
//         console.log(employee);
//     }
// }
// var developers=employees.filter(emp=>emp[2]=="developer")
// console.log(developers);

// //4. print employee detail whos salary greater than 30000
// for(let emp of employees)
// {
//     if(emp[4]>35000)
//     {
//         console.log(emp);
//     }
// }

// //5. print details of employee arjun
// for(let employee of employees)
// {
//     if(employee[1]=="arjun")
//     {
//         console.log(employee);
//     }
// }


// *****sort*****

//6. sort employeee based on salery order by dsc
// employees.sort((emp1,emp2)=>emp1[4]-emp2[4]) asc
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4]) dsc

// console.log(employees);

// 7. sort by experience by asc
// employees.sort((emp1,emp2)=>emp1[5]-emp2[5])

// console.log(employees);

// ******map*****

// 8. employee name only
// console.log(employees.map(emp=>emp[1]));

// 9. total salary
// console.log("total");


// var total=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(total);

// 10. min salary
// console.log("min");

// var min=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal1:sal2)
// var min=employees.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1[4]:emp2[4])
// console.log(min);




// 11. highest salary
// console.log("max");

// var max=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
// var max=employees.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1[4]:emp2[4])

// console.log(max);
// 12. highest paid employee
// console.log("highest paid employee");

// var highPaidEmp=employees.reduce((e1,e2)=>e1[4]>e2[4]?e1:e2[1])
// console.log(highPaidEmp);


// *****forEach******
employees.forEach(emp=>console.log(emp[1]))




