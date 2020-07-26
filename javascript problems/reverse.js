var statement = "Hello Alien bhai brother.";

function reverseString(str){
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var forAlien = reverseString(statement);
console.log(forAlien);

var foodVlog = reverseString("Ki khwaa jai.. khida lagse");
console.log(foodVlog);