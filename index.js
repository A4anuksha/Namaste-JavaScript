var a =100;
let b = 100;
const c= 50;
function x(){
    var a=10;//shadowing outer var a
    let b = 20;
    const c = 30;
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}
x();
    console.log(a);//10
    console.log(b);//ReferenceError:b not defined//can't access outside the block
    console.log(c);//ReferenceError:c not defined


