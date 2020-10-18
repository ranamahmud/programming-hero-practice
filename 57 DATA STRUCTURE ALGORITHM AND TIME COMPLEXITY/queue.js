class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}


const premiks = new Queue();
premiks.enqueue('Ashik')
premiks.enqueue('Dewan')
premiks.enqueue('Prem')
premiks.enqueue('Priya')
console.log(premiks.queue)
const winner = premiks.dequeue();
console.log(winner);
console.log(premiks.queue)
