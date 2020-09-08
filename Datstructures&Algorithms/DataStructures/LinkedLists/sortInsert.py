class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None

def sorted_insert(head, data):

    new_node = Node(data)
    if head is None or data < head.data:
        new_node.next = head
        head = new_node

        return head

    current_node = head
    prev_node = head
    while(current_node is not None and current_node.data < data ):
        prev_node = current_node
        current_node = current_node.next
    new_node.next = current_node
    prev_node.next = new_node

    return head
