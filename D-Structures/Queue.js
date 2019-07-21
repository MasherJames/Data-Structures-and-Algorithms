class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }
    front() {
        if (this.isEmpty()) {
            return "There are no elements in this queue";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printQueue() {
        let str = "";
        this.items.forEach(item => {
            str += item + " ";
        });
        return str;
    }
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// console.log(queue.printQueue());
// console.log(queue.isEmpty());

// Application
const generateAndPrintBinary = n => {
    const newQueue = new Queue();
    newQueue.enqueue("1");

    while (n > 0) {
        // print the queue front
        const firstBinary = newQueue.front();
        newQueue.dequeue();
        console.log(firstBinary);

        const nextBinary = firstBinary;

        newQueue.enqueue(firstBinary + '0');
        newQueue.enqueue(nextBinary + '1');
        n--;
    }
}
generateAndPrintBinary(5)