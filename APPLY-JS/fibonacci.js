var fibo = [0, 1];
// fibo[2]  = fibo[2-1] + fib[2 - 2];
// fibo[3]  = fibo[3-1] + fib[3 - 2];
// fibo[4]  = fibo[4-1] + fib[4 - 2];
// fibo[5]  = fibo[5-1] + fib[5 - 2];
// fibo[n]  = fibo[n-1] + fib[n - 2];
// fibo[i]  = fibo[i-1] + fib[i - 2];
for(var i = 2; i<= 12; i++){
    fibo[i] = fibo[i - 2] + fibo[i - 1];
    console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);

