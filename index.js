//Trying to block the main thread using while loop

console.log("Start");

setTimeout(()=>{
    console.log("Callback");
},5000);

console.log("End");

//trying to create millions of line being executed effect
let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While loop finished");


//Trying to differ some code using setTimeout of 0ms

console.log("Start");

function cb(){
    console.log("Callback");
}

setTimeout(cb,0);


console.log("End");