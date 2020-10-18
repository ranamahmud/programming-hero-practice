const dictionary = {};
dictionary["name"] = "kotkoti begum";

class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) { return this.dictionary[key] }
}

const phoneBook = new Dictionary();

phoneBook.add("Mahi", "03234234")
phoneBook.add("Porimoni", "03234234")
phoneBook.add("Purnima", "03234234")

console.log(phoneBook.dictionary)
const mahi = phoneBook.get("Mahi")
console.log(mahi)