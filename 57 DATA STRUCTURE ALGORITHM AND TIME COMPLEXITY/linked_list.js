class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const mBondon = new LinkedList(head);
mBondon.add(27)
mBondon.add(13)
mBondon.add(59)
console.log(mBondon)
console.log(JSON.stringify(mBondon))