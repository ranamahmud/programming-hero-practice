var numbers = [45, 81, 63, 98, 56, 35, 23];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("total of the numbers: ",sum);

function getArraySum(numbers){
    var sum = 0;

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
return sum;
}
var numbers = [44, 65, 78, 12];
var result = getArraySum(numbers);
console.log("total of the numbers: ",result);
var total = getArraySum([46, 88,92]);
console.log("total of the numbers: ",total);
