class Node:
    def __init__(self, data=None, prev=None, nextV=None):
        self.data = data
        self.prev = prev
        self.next = nextV


class DoubleLinkedList:

    def __init__(self):
        self.head = None

    def insertAtTheHead(self, data):
        # Create new node
        new_node = Node(data)

        # Assign next and previous
        new_node.prev = None
        new_node.next = self.head

        if self.head is not None:
            self.head.prev = new_node

        # Assign new node as head
        self.head = new_node

    def insertAtTheEnd(self, data):
        new_node = Node(data)
        if self.head is None:
            new_node.next = None
            new_node.prev = None
            return
        current_node = self.head
        while current_node.next:
            current_node = current_node.next
        new_node.next = None
        new_node.prev = current_node
        current_node.next = new_node

    def insertAfterNode(self, prev_node, data):
        if prev_node is None:
            return
        new_node = Node(data)
        new_node.next = prev_node.next
        new_node.prev = prev_node
        prev_node.next = new_node

        if new_node.next:
            new_node.next.prev = new_node

    def insertBeforeNode(self, next_node, data):
        if next_node is None:
            return
        new_node = Node(data)
        new_node.prev = next_node.prev
        new_node.next = next_node
        next_node.prev.next = new_node
        next_node.prev = new_node

    def printDll(self):
        current_node = self.head
        while current_node:
            print(current_node.data)
            current_node = current_node.next


dll = DoubleLinkedList()
dll.insertAtTheHead(6)
dll.insertAtTheHead(1)
dll.insertAtTheHead(7)
dll.insertAtTheEnd(1000)
dll.insertAtTheHead(90)
dll.insertAfterNode(dll.head.next, 78)
dll.insertBeforeNode(dll.head.next.next, 1010)
dll.printDll()
