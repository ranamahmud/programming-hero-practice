console.log(2030/4);
console.log(2032/4);

const year = 3996;
console.log(year / 4);
console.log(year % 4);
console.log(3688 % 4);

const remainder = year % 4;
console.log(remainder == 0);
if(remainder  == 0){
    console.log('Your year is a leap year.')
}else{
    console.log('Your year is not leap year')
}


function isLeapYear(year){
    const remainder = year % 4;
    if(remainder  == 0){
        return true;
    }else{
        return false;
    }
}

const check2000 = isLeapYear(2000);
console.log(check2000);


function isLeapYear(year){
    if((((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))){
        return true;
    }else{
        return false;
    }
}

const check20002= isLeapYear(2000);
console.log(check20002);

console.log(isLeapYear(1700))