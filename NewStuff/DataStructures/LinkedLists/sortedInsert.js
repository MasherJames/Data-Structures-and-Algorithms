// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const sortedInsert = (head, data) => {
  data = new Node(data);
  if (!head) {
    head = data;
    head.next = null;

    return head;
  }

  if (head.data > data.data) {
    data.next = head;
    head = data;

    return head;
  }

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
