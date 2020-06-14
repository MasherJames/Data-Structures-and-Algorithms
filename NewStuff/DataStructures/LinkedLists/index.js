/*
Linked list node with the data value linked to it
and the pointer to the next Node set to

*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked list class

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtTheBeginning(data) {
    // create a new liked list node
    const new_node = new Node(data);
    // Put the current node as the next for the new node
    new_node.next = this.head;
    // set the current node as the head
    this.head = new_node;
  }

  insertAfterNode(prev_node, data) {
    // if the specified previous node does not exist, exit
    if (prev_node === null) {
      return;
    }
    // create a new linked list node
    const new_node = new Node(data);
    // assign next of the prev_node to new node
    new_node.next = prev_node.next;
    // Assign current new_node as the next of the previous node
    prev_node.next = new_node;
  }

  insertAtTheEnd(data) {
    // create a new linked list node
    const new_node = new Node(data);
    // if no head, then the linked list is empty, insert new node to head
    if (this.head === null) {
      this.head = new_node;
      return;
    }
    /*
    Else, traverse the list from the head upto the last node and insert the new
    node there
    */
    let last_node = this.head;
    while (last_node.next !== null) {
      last_node = last_node.next;
    }
    last_node.next = new_node;
  }

  printLinkedList() {
    let current_node = this.head;
    while (current_node) {
      console.log(current_node.data);
      current_node = current_node.next;
    }
  }
}

llist = new LinkedList();

llist.insertAtTheEnd(6);

llist.insertAtTheBeginning(7);

llist.insertAtTheBeginning(1);

llist.insertAtTheEnd(4);

llist.insertAfterNode(llist.head.next, 8);

llist.printLinkedList();
