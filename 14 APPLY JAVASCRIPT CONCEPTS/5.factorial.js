var factorial = 1;

for (var i = 1; i <= 5; i++) {
    factorial *= i;
    console.log(factorial);
}

function factorialCal(n) {
    var factorial = 1;

    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialCal(10))