let number = 59;
number = 79;
number = 119;
const name = 'Rana';
console.log(number);
console.log(name);

var marks = [89, 97, 89, 68, 94];

for(var i  = 0; i< marks.length; i++){
    console.log('hello');
}

for(var i  = 0; i< marks.length; i++){
    var element = marks[i];
    console.log(element);
}

function add(number1, number2){
    var total = number1 + number2;
    return total;
}

var result1 = add(65, 89);
console.log(result1);
var adam = 'Adam Sandler';
var kodom = 'Kodmo Sandler';
console.log('not adding this time');
console.log('not eating right now');

var result2 = add(144, 568);
console.log(result2);

function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i < number.length; i++){
        var element = numbers[i];
        console.log(element);
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var output = largestNumber([45, 78, 89]);
console.log(output);

var numbers = [98, 68, 23, 10,2];
var output = largestNumber(numbers);
console.log(output);
