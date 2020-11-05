var i = 1;
var factorial = 1;
while (i <= 10) {
    factorial *= i;
    i++;
}
console.log(factorial)


function factorialCal(n) {
    var factorial = 1;
    var i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    return factorial;
}

console.log(factorialCal(5))