# Sorting a linked list with merge sort

class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None


def insert_sort(head):
    # if the head is null or head.next is null, the list is already sorted
    if head is None or head.next is None:
        return head

    # Else, split the list in two halves recursively, then merge them up

    slow = head
    fast = head

    while(fast.next is not None and fast.next.next is not None):
        slow = slow.next
        fast = fast.next.next

    middle = slow
    nextToMiddle = middle.next

    middle.next = None

    left_linked_list = insert_sort(head)
    right_linked_list = insert_sort(nextToMiddle)

    return merge(left_linked_list, right_linked_list)


# Sorts and Merges two linked lists
def merge(left_list, right_list):

    current_node = Node(0)
    while(left_list is not None and right_list is not None):
        # At every time, check for the lesser value
        if left_list.data <= right_list.data:
            current_node.next = left_list
            left_list = left_list.next

        else:
            current_node.next = right_list
            right_list = right_list.next

        current_node = current_node.next

    while left_list is not None:
        current_node.next = left_list
        left_list = left_list.next
    while right_list is not None:
        current_node.next = right_list
        right_list = right_list.next

    return current_node.next



def merge(a, b):

    # Base cases
    if a == None:
        return b
    if b == None:
        return a

    if a.data <= b.data:
        result = a
        result.next = merge(a.next, b)
    else:
        result = b
        result.next = merge(a, b.next)
    return result
