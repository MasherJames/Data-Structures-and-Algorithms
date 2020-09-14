class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList(object):
    head = None
    # def __init__(self):
    #     self.head = None

    def insert(self, data):
        new_node = Node(data)
        if LinkedList.head is None:
            LinkedList.head = new_node
            return
        last_node = LinkedList.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def printLinkedList(self):
        current_node = LinkedList.head
        while current_node:
            print(current_node.data)
            current_node = current_node.next

    def remove_duplicates(self):
        head = LinkedList.head
        if head is None or head.next is None:
            return head
        current_node = head
        while current_node and current_node.next:
            if current_node.data == current_node.next.data:
                current_node.next = current_node.next.next or None
            if current_node.next and current_node.data != current_node.next.data:
                current_node = current_node.next
        return head

    def reverse_iteratively(self):
        current_node = LinkedList.head
        next_node = None
        prev_node = None

        while current_node:
            next_node = current_node.next
            current_node.next = prev_node
            prev_node = current_node
            current_node = next_node
        LinkedList.head = prev_node
        return LinkedList.head


    @staticmethod
    def reverse(current_node):
        if current_node.next is None:
            LinkedList.head = current_node
            return
        LinkedList.reverse(current_node.next)
        # Put the next in a temp var
        prev_node = current_node.next
        prev_node.next = current_node
        current_node.next = None


    def reverse_recursively(self):
        LinkedList.reverse(LinkedList.head)


linkedList = LinkedList()
linkedList.insert(1)
linkedList.insert(4)
linkedList.insert(7)
linkedList.insert(8)
linkedList.printLinkedList()
print()
# linkedList.reverse_iteratively()
linkedList.reverse_recursively()
linkedList.printLinkedList()
