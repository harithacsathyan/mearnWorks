var lang={
    name:"javaScript",
    type:"interpreted",
    version:"ES10"
}
var frameWrk={
    name:"express"
}
frameWrk.__proto__=lang //use insted of inheritance for objects   prototype inheritnce
console.log(lang.name);
console.log(frameWrk.type);