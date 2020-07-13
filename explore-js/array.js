var names = ["Rana","Rina","Rakhi"];
var teaLine = ['Palam', 'Kalam', 'Salam','Balam','Jalam','Talam'];
var part = teaLine.slice(2, 5);
console.log(names);
console.log(part);
console.log(teaLine);

console.log(teaLine.pop())
console.log(teaLine);

var age = 12;

var friendsAge = [15, 17, 14, 16];

console.log(friendsAge);

console.log(friendsAge[2]);

var sonaliAge = friendsAge[2];

friendsAge[1] = 21;

console.log(friendsAge);
var position = friendsAge.indexOf(14);
console.log(position);


position = friendsAge.indexOf(141);
console.log(position);


friendsAge.push(15);

friendsAge.push(19);
console.log(friendsAge);

console.log(friendsAge.length)

friendsAge.pop()
console.log(friendsAge);

