class student{    //create class
    constructor(roll_no,name,course,total){ // constructor used to initializing instace variable
    this.number=roll_no; //instac evariable
    this.s_name=name;
    this.s_course=course;
    this.sum=total;
    }
    printDetails(){
        console.log(this.number,this.s_name,this.s_course,this.sum);
    }
}

var st1=new student(11,"appu","ms",90)// constrctr calls itself when the object crated
var st2=new student(12,"ammu","dj",80)

st1.printDetails()
st2.printDetails()