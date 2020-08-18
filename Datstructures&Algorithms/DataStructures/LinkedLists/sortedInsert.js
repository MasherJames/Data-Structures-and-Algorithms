/**
 * inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const sortedInsert = (head, data) => {
  data = new Node(data);

  // Insert node to an empty linked list || head of a linked list
  if (!head || data.data < head.data) {
    data.next = head;
    head = data;

    return head;
  }

  /*
  Handles inserting a node at the end or in the middle of a linked list
  */
  let current = head;

  while (
    current.next !== null &&
    current.data < data.data &&
    current.next.data < data.data
  ) {
    current = current.next;
  }

  data.next = current.next;
  current.next = data;

  return head;
};
