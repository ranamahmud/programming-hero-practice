// 3! = 1X2X3
// 4! = 1X2X3X4
// 5! = 1X2X3X4X5
// 10! = 1*2*3*4*5*6*7*8*9*10


for(var i = 1; i <= 10; i++){
    console.log(i)
}


// var factorial = 1;
// for(var i = 1; i <= 50; i++){
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

// console.log(factorial);


function factorial(n){
    var factorial = 1;

    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factorial(5));