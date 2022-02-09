class parent{
    bike(){
        console.log("passion");
    }
}
class child extends parent{
    bike(){
        console.log("duke");
    }
}
var ch=new child()
ch.bike()