const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        return this.firstName + " " +this.lastName;
    },

    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
    }
}
console.log(normalPerson);
console.log(normalPerson.getFullName());
normalPerson.chargeBill(150);
normalPerson.chargeBill(1500)
console.log(normalPerson.salary);
