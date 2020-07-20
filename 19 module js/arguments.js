function addNumbers(num1, num2) {
    return num1 + num2;
}

var results = addNumbers(3, 5);
console.log(results);

function addNumbers(num1, num2) {
    console.log(arguments);
    console.log(arguments[3]);
    return num1 + num2;
}
var results = addNumbers(3, 5, 8, 15,49);
console.log(results);

function addNumbers(num1, num2) {
    var sum = 0;
    console.log('double', double);
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num);
        sum += num;
    }

    function logInfo(message) {
        console.log(message);
    }
    logInfo("Good morning");
    var double = sum * 2;

    return sum;
}
var results = addNumbers(3, 5, 8, 15,29, 49);
console.log(results);
