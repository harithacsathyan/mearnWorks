class student{    //create class
    setDetails(roll_no,name,course,total){ // initializing instace variable
    this.number=roll_no;// instace variables
    this.s_name=name;
    this.s_course=course;
    this.sum=total;
    }
    printDetails(){
        console.log(this.number,this.s_name,this.s_course,this.sum);
    }
}
var st1=new student() //   create object
st1.setDetails(11,"appu","ms",90) // call fnctn
var st2=new student()
st2.setDetails(12,"ammu","dj",80)

st1.printDetails()
st2.printDetails()