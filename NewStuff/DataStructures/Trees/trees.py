class Node:
    def __init__(self, key):
        # Default values for the current value, left and right nodes
        self.left = None
        self.right = None
        self.val = key

# This function inserts a new node to the tree
# by passing the current root and the node to be inserted


def insert(root, node):
    if root is None:
        # Assign the node to the root if the tree is empty
        root = node
    else:
        # Values on the left subtree of a node should be less than the value on that node
        # Values on the right subtree of a node should be greater than the value on that node
        if root.val < node.val:
            # If right is empty assign it the value
            # else call insert until it gets a none valued right node
            if root.right is None:
                root.right = node
            else:
                insert(root.right, node)
        else:
            if root.left is None:
                root.left = node
            else:
                insert(root.left, node)


# left, root then right
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)


# root, left then right
def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)


# left, right then root
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)


r = Node(50)
insert(r, Node(30))
insert(r, Node(20))
insert(r, Node(40))
insert(r, Node(70))
insert(r, Node(60))
insert(r, Node(80))

# inorder(r)
preorder(r)
postorder(r)
