//function Statement or function declaration
function a(){
    console.log("a called");
}
a();

//Function Expression
var b = function(){
    console.log("b called");
}
b();

//Anonymous Function
var c = function(){
    console.log("c called");
}
c();

//Named Function Expression
var d = function dog(){
    console.log("d called");
}
d();

//Difference between parameters and arguments
var e= function (param1, param2){
    console.log("param1: " + param1);
    console.log("param2: " + param2);
}
e("arg1", "arg2");