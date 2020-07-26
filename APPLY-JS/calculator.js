
var prompt = require('prompt-sync')();
// step 1
var num1;
var num2;
// step 2
 num1 = parseFloat(prompt("Enter number 1: "));
 num2 = parseFloat(prompt("Enter number 2: "));
var sign = prompt("Enter sign: ");
var result;
// step 3
if(sign === "+"){
    result = num1 + num2;
}else if(sign === "-"){
    result = num1 - num2;
}else if(sign === '*'){
    result = num1 * num2;
} else if(sign === '/'){
    result = num1 / num2;
}

// step 4
console.log(result);
