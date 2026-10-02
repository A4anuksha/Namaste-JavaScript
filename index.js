//The code we wote belowin that we are repeating ourselves so much

const radius = [3,1,2,4];

const calculateArea = (radius) => {
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

const calculateCircumference = (radius) => {
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};
console.log(calculateCircumference(radius));

const calculateDiameter = (radius) => {
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
};
console.log(calculateDiameter(radius));


//An optimized version of the code written above can be

const area = function(radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius){
    return 2* radius;
};

const calculate = function(radius, logic){
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


//Trying to create our own version of map function

const area1 = function(radius){
    return Math.PI * radius * radius;
};

Array.prototype.calculate = function(logic){
    const output = [];

    for (let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
};
console.log(radius.calculate(area1));