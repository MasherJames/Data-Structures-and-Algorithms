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

// root, left, right
const preOrderTraversal = (root) => {
  const response = [];
  helper(root, response);
  return response;
};

const helper = (root, response) => {
  if (root !== null) {
    response.push(root.val);
    if (root.left !== null) {
      helper(root.left, response);
    }
    if (root.right !== null) {
      helper(root.right, response);
    }
  }
};

console.log(preOrderTraversal(root));

const preOrderStack = (root) => {
  const response = [];
  const stack = [];

  stack.push(root);
  while (stack.length > 0) {
    const currentNode = stack.pop();
    response.push(currentNode.val);

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    // Push the left node last so as to traverse it after the root node
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }
  return response;
};
console.log(preOrderStack(root));
