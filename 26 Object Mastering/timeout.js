function doSomething(params) {
    console.log(3333);
}
console.log(1222);
// console.log(3333);
// doSomething();
// setTimeout(doSomething);

// setTimeout(doSomething, 10000);

// setTimeout(function(){
//     console.log('lazy and waiting');
// }, 4000)

setTimeout(() => {
    console.log('See you later');
}, 4000);

setInterval(function(){
    console.log('doing it');
}, 3000);
console.log(4444);
console.log(4444);