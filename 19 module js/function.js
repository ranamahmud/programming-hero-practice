// console.log(12);

function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num*2, ': is odd number');
    }
}



function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ': is even number');
        } else {
            console.log(num*2, ': is odd number');
        }
    }
}
var nums = [5, 12, 89, 45, 18, 8];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num * 2);
}

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num, ': is odd number');
    }
}

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num * 2, ': is even number');
    }
}


friends_age = [13, 17, 19, 20, 18];
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    console.log(age);
    if (age % 2 == 0) {
        console.log(age, ': is even number');
    } else {
        console.log(age, ': is even number');
    }
}

for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    evenify(age);
}

evenify_all(nums);



function evenify_return(num) {
    if (num % 2 == 0) {
        return num;
    } else {
        console.log(num*2, ': is odd number');
    }
    return 500;
}
var result = evenify_return(5);
console.log(result);
var result = evenify_return(10);
console.log(result);


function evenify_return2(num) {
    if (num % 2 == 0) {
        return num;
    } else {
        return num*2;
    }
}
var result = evenify_return2(5);
console.log(result);
var result = evenify_return2(10);
console.log(result);


function evenify_return3(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num*2;
    }
    return result;
}
var result = evenify_return3(5);
console.log(result);
var result = evenify_return3(10);
console.log(result);
var result = evenify_return3(13);

var square = result*result;
console.log('square', square);


function evenify_all_arr(nums) {
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
       var result = evenify_return2(num);
       even_array.push(result);
    }
    return even_array;
}

var nums_even = evenify_all_arr(nums);
console.log(nums_even);