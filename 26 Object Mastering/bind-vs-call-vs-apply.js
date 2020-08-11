const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        return this.firstName + " " +this.lastName;
    },

    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
    }
}
// console.log(normalPerson);
// console.log(normalPerson.getFullName());
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(1500)
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Friend',
    lastName: 'Balam',
    salary: 25000
}



// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);