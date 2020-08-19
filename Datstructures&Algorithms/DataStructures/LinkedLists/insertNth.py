from . import Node

def insert_nth(head, index, data):
    new_node = Node(data)
    # Insert to head if linked list is empty
    if head is None:
        head = new_node
        return head

    # Handle insert at the head
    if index == 0:
        new_node.next = head
        head = new_node
        return head

    current_node = head
    current_node_indx = 1

    while current_node:
        # Raise error if the insert position is out of range
        if current_node.next is None and current_node_indx != index:
            raise("Invalid index value should raise error.")
        # Insert node at the correct position
        if current_node_indx == index:
            new_node.next = current_node.next
            current_node.next = new_node
            return head
        current_node = current_node.next
        current_node_indx += 1