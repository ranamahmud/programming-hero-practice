const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

function square(num) {
    return num * num;
}

var result = numbers.map(function (element) {
    return element * element;
}
)
console.log(result);

numbers.map(function (element, index, array) {
    console.log(element, index, array);
})

const square2 = element => element * element;
const square3 = x => x * x;
const result2 = numbers.map(x => x * 2);
console.log(result2);


var even = numbers.filter(num => num % 2 == 0);
console.log(even);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const smaller = numbers.filter(x => x < 5);
console.log(smaller);