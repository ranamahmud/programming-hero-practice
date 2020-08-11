var student = {
    id: 121,
    phone: 1745,
    name: "Abir"
};

var student2 = {
    id: 131,
    phone: 457,
    name : "mahi"
};

var phoneNo = student.phone;
console.log(student);
console.log(student2);

console.log(phoneNo);
// Second way to access
phoneNo = student["phone"];
console.log(phoneNo);

// third way to access
var phonePropName = "phone";
phoneNo = student[phonePropName];
console.log(phoneNo);

var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];

// update values
student2.phone = 547854;
student2["phone"] = 666888;
student2[phonePropName] = 9999911111;
console.log(phoneNo1);
console.log(student2.phone)

student2.cinema = "Ogni2";
student2["cinema"] = "Smart Girl";
console.log(student2);