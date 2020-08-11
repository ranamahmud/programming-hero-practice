var number1 = 25;
var number2 = 15.5;

console.log(number1 + number2);

var number3 = '25.5';
var number4 = 15.5;

console.log(number3 + number4);


console.log(parseFloat(number3) + number4);

console.log(parseInt(number3) + number4);

var number5 = '3.2';
number5 = +number5;

console.log(number5);

var number6 = 25;
console.log(number6.toString())
console.log(number6 + 10);
console.log(''+number6+10);

number6 = '' + number6;

console.log(typeof number6);

var number7 = 0.1;
var number8 = 0.2;
var total = number7 + number8;
total = total.toFixed(5);
console.log(total);
console.log(number7 + number8);