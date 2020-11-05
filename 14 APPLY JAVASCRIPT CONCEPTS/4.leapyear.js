const year = 3947;
let remainder = year % 4;
if (remainder == 0) {
    console.log('Your year is a leap Year');
} else {
    console.log('Your year is not a leap Year')
}

// ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))


function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2000))
console.log(isLeapYear(2004))
console.log(isLeapYear(1700))
console.log(isLeapYear(1999))