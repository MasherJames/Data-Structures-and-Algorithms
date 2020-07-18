// The left subtree of a node contains only nodes with keys less than the node's key
// The right subtree of a node contains only nodes with keys greater than the node's key
// Both the left and right sub trees must also be binary search trees.

class Node {
  constructor(val) {
    // represents the root node
    this.val = val;
    // represents the left node of the root node
    this.left = null;
    // represents the right node of the root node
    this.right = null;
  }
}

// Initialize the tree
const root = new Node(20);
root.left = new Node(15);
root.right = new Node(25);
root.left.left = new Node(13);
root.left.right = new Node(17);
root.right.left = new Node(23);
root.right.right = new Node(27);

const validateBinarySearchTree = (root) => {
  let leftNodeValue = -Number.MAX_VALUE * 2;
  const stack = [];
  while (root !== null || stack.length > 0) {
    // traverse the left subtree and push values to the stack
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    // Pop the last item, i.e left most node in the tree but the current node
    root = stack.pop();
    // Check if it's left is greater
    if (root.val <= leftNodeValue) {
      return false;
    }
    // re-assign the leftNodeValue
    leftNodeValue = root.val;
    // traverse the right sub tree
    root = root.right;
  }
  return true;
};
console.log(validateBinarySearchTree(root));
