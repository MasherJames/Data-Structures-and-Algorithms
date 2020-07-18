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

// left, right, root
const postOrderTraversal = (root) => {
  const response = [];
  helper(root, response);
  return response;
};

const helper = (root, response) => {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, response);
    }
    if (root.right !== null) {
      helper(root.right, response);
    }
    response.push(root.val);
  }
};

console.log(postOrderTraversal(root));

// Using a stack
/*

*/

const postOrderStackApproach = (root) => {
  const response = [];
  const stack = [];

  stack.push(root);

  while (stack.length > 0) {
    const currentNode = stack.pop();
    // We use unshift to insert at the beginning since we will insert in reverse order
    // i.e root, right, left
    response.unshift(currentNode.val);
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
    // We push this last so that it will be popped out first
    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
  }
  return response;
};
console.log(postOrderStackApproach(root));
