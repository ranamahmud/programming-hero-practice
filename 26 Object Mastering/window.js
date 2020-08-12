var name = 'Kuddus';
// function add(num1, num2) {
//     var result =  num1 + num2;
//     console.log('result inside',result);
//     console.log('name inside',name);

//     return result;
// }
function add(num1, num2) {
    // var result =  num1 + num2;
    result =  num1 + num2;

    // window.result =  num1 + num2;

    console.log('result inside',result);
    console.log('name inside',name);

    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
// console.log('result outside',result);
console.log('name outside', name);
var sum = add(13, 21);
console.log(sum);
console.log('result outside',result);