const c=5;//must be initialized at the time of declaration
//Uncaught SyntaxError: Missing initializer in const declaration

let a=10;//can't redeclare in the same scope
//Uncaught SyntaxError: Identifier 'a' has already been declared

var b=100;
var b =4;
var b =10;
console.log(b);