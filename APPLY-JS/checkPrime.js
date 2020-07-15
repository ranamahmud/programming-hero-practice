var n = 128;

for(var i = 2; i< n ; i++){
    console.log(i, n / i);
}

for(var i = 2; i< n ; i++){
    // console.log(i, n % i);
    if(n%i == 0){
        console.log("Not a prime number");
        break;
    }
}
console.log('Your number is a prime number');


function isPrime(n){
    for(var i = 2; i< n ; i++){
        // console.log(i, n % i);
        if(n%i == 0){
            console.log("Not a prime number");
            return;
        }
    }
    console.log('Your number is a prime number');
    
}
var result = isPrime(128);
console.log(result);
var result = isPrime(129);
console.log(result);
var result = isPrime(139);
console.log(result);
isPrime(22);
isPrime(13);

