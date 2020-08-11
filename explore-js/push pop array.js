var teaLine = ['Palam', 'Kalam', 'Salam','Balam','Jalam','Talam'];
console.log(teaLine);
teaLine.push("Palailam");
console.log(teaLine);
teaLine.pop()
console.log(teaLine);
teaLine.shift()
console.log(teaLine);
teaLine.unshift("Palam");

console.log(teaLine);

part = teaLine.slice(2);
console.log(part);
part = teaLine.slice(2,4);
console.log(part);