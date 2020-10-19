// const friends = ['Spiderman', 'Ironman', 'Antman', 'Goatman', 'CowMan', 'Snakeman']

// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];
//     if (element === 'Goatman') {
//         return i;
//     }
// }


const friends = [12, 45, 67, 89, 121, 345, 658, 399]

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element === 12) {
        return i;
    }
}

let numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 47, 82]


function binarySearch(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            console.log('item found in position ', mid)
            return mid;
        }
        if (numbers[mid] < target) {
            start = mid + 1;
        } if (numbers[mid] >= target) {
            end = mid - 1;
        }
    }
    return -1;
}

const index = binarySearch(numbers, 37)
console.log(index)