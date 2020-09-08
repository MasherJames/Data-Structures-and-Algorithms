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
def merge(l1, l2):
    fake_first = Node(-1)
    last = fake_first

    while l1 and l2:
        if l1.data < l2.data:
            last.next = l1
            l1 = l1.next
        else:
            last.next = l2
            l2 = l2.next
        last = last.next
    if l1:
        last.next = l1
    if l2:
        last.next = l2
    return fake_first.next