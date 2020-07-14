var inch = 156;
console.log(inch);
console.log(inch);
console.log(inch);
var foot = inch / 12;
console.log(foot);
console.log(foot);
console.log(foot);

// function inch to feet

function inchToFeet(inch){
    var feet =  inch / 12;
    return feet;
}

console.log(inch)

var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

var naniFeet = inchToFeet(288);
console.log(naniFeet);

var dadiFeet = inchToFeet(300);
console.log(dadiFeet);

var senior = [156, 288, 300];

var nanaFeet = inchToFeet(senior[1]);
console.log(nanaFeet);