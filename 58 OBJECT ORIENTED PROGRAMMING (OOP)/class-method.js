class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getPower() {
        if (this.getPower) {
            return this.power;
        } else {
            return 'I have no power!';
        }
    }

    goForGrocery() {
        console.log(this.getPower());

        return 'Price is too high, i can not buy'
    }
}

const catMan = new Hero('catman', 'Deep khamsi')
console.log(catMan.name)
console.log(catMan.getPower())
console.log(catMan.goForGrocery())