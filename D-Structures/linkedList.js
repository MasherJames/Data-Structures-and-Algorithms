// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

// function Node(value, next, prev) {
//   this.value = value;
//   this.next = next;
//   this.prev = prev;
// }

// LinkedList.prototype.addToHead = function(value) {
//   let newNode = new Node(value, this.head, null);
//   if (this.head) {
//     this.head.prev = newNode;
//   } else {
//     this.tail = newNode;
//   }
//   this.head = newNode;
// };

// LinkedList.prototype.addToTail = function(value) {
//   let newNode = new Node(value, null, this.tail);
//   if (this.tail) {
//     this.tail.next = newNode;
//   } else {
//     this.head = newNode;
//   }
//   this.tail = newNode;
// };

// const ll = new LinkedList();

// ll.addToHead(1);
// ll.addToHead(2);
// ll.addToHead(3);

// console.log(ll);

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    };
};
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };
    // Add an element to the end of the linked list
    addAtTheEnd(item) {
        // new node 
        let node = new Node(item);
        // hold the cureent node
        let current;
        if (this.head = null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };

    insertAt(item, index) {
        if (index > 0 && index > this.size) {
            return false;
        } else {
            // If the specified index is  valid, create a new node
            let node = new Node(item);
            let curr, prev;

            curr = this.head;
            if (index === 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

};