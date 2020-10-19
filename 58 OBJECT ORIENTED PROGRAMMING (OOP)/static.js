class Animal {
    static category = 'Dog'
    location = "Khagrachari"
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1, animal2) {
        if (animal1.speed > animal2.speed) {
            return `${animal1.name} is faster than ${animal2.name}`
        }
        return `${animal2.name} is faster than ${animal1.name}`
    }
}

const myRat = new Animal('rat', 12)
const myDog = new Animal('dog', 50)
console.log(myRat)
console.log(myRat.category)
console.log(Animal.category)
console.log(myRat.location)
console.log(Animal.location)

console.log(Animal.compare(myRat, myDog))