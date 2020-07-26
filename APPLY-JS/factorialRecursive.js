// 10! = 1*2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 2!*3
// 4! = 3! * 4
// 5! = 4!*5
// 6! = (6-1)!*6
// 7! = (7-1)!*7
// 8! = (8-1)!*8
// n! = (n-1)!*n

for(vari = 0; i>= 0; i--){

}

var i = 1;
while(i<=10){

    i++;
}

var i = 10;
while(i>=0){

    i--;
}

function factorial(n){
    var fact = 1;
    if(n==0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);
console.log(factorial(5))