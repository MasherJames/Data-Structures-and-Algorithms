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

const root2 = new Node(20);
root2.left = new Node(15);
root2.right = new Node(25);
root2.left.left = new Node(13);
root2.left.right = new Node(17);

const maxDepth = (root) => {
  //  Todo
};

const checkBalancedBinaryTree = (root) => {};
console.log(checkBalancedBinaryTree(root));
console.log(checkBalancedBinaryTree(root2));
