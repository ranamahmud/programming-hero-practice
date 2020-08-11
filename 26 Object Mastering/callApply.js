const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
        return this.firstName + " " +this.lastName;
    },

    chargeBill: function (amount) {
        this.salary = this.salary - amount;
    }
}
console.log(normalPerson);
console.log(normalPerson.getFullName());
normalPerson.chargeBill(150);
normalPerson.chargeBill(1500)
console.log(normalPerson.salary);