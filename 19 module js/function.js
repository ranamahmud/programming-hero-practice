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