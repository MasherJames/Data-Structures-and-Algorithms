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

const maxDepthBinaryTree = (root) => {
  if (root === null) {
    return 0;
  }
  // recursively call maxDepthBinaryTree until there is no more root
  // execute function in the execution stack and add one subsequently
  // return the maximum number between the left and right sub trees
  return (
    Math.max(maxDepthBinaryTree(root.left), maxDepthBinaryTree(root.right)) + 1
  );
};
console.log(maxDepthBinaryTree(root));
