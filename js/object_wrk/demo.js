// obects use{key:value}
// var expence={
//     jan:10000,
//     feb:20000,
//     march:30000
// }
// student
var student={
    roll_no:11,
    st_name:"appu",
    course:"maths",
    total:450
}
console.log(student.st_name);      //*print value
console.log(student.course);
console.log("gender" in student);      //*check property
student["gender"]="male"    //*add property
student.isVccinated=true     //*type2
student.vaccine="covishield"
student.vaccine="co-vaxine"   //*update
student.total+=50   //*add value
console.log(student);    



for (var key in student){
    console.log(key);    //*key  ie..roll_no,name..ect
    console.log(student[key]);      //*values ie..11,appu..ect
}

student.subject=["english"]     //*add more than one value
console.log(student);
student.subject.push("malayalm")    //*push value to it
console.log(student);



