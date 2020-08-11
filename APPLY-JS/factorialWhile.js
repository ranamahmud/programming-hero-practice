var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

var factorial = 1;
var i = 1;
while (i <= 10) {
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
}

function factorialFunc(num) {
    var fact = 1;
    var i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorialFunc(5);
console.log(result);
console.log(factorialFunc(5))