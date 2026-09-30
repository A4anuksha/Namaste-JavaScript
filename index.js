// function outest(){
//     var c=20;
//     function outer(b){

//         function inner(){
//             console.log(a,b,c);
//         }
//         let a=10;
//         return inner;
//     }
//     return outer;
// }
// let a =100;
// var close = outest()("Hello World");
// close();

//Example of Data Hiding and encapsulation

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();