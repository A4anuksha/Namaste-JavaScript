//What is a callback function?

setTimeout(function(){
    console.log("timer");
},5000);
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});


//Closures Demo with Event Listeners
function attachEventListener(){
    let count = 0;
    document.getElementById("clickme")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked",++count);
    } );
}