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
// Using a recursive approach
const inorderTraversal = (root) => {
  const response = [];
  // Call the helper with the root node
  helper(root, response);

  return response;
};

const helper = (root, response) => {
  // call helper recursively if it is not null
  if (root !== null) {
    if (root.left !== null) {
      // If the left node for the root node exist, traverse it
      // push the function calls to the recursive stack
      helper(root.left, response);
    }
    // push all current root value
    response.push(root.val);
    if (root.right !== null) {
      // If the current root node has a right node, traverse it
      // Push the respective function calls to the recursive stack
      helper(root.right, response);
    }
  }
};

const root = new Node(20);
root.left = new Node(15);
root.right = new Node(25);
root.left.left = new Node(13);
root.left.right = new Node(17);
root.right.left = new Node(23);
root.right.right = new Node(27);

// console.log(inorderTraversal(root));

// Using a stack
const inorderTraversalStack = (root) => {
  let current = root;
  const stack = [];
  const response = [];

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      //Push current to stack and re-assign it to make sure
      // You get to the last left node if it exist
      stack.push(current);
      current = current.left;
    }
    // code gets here when you reach farthest left node
    // Pop the last item
    current = stack.pop();
    // Push to response
    response.push(current.val);
    // traverse to right after vising root
    current = current.right;
  }
  return response;
};
console.log(inorderTraversalStack(root));

// Initialize var count with zero to keep track of the number of function calls
let count = 0;
const nthNodeInorderTraversal = (root, n) => {
  // If the root doesn't exist, return -1
  if (root === null) {
    return -1;
  }
  // run this block if the function calls are yet to hit n
  if (count <= n) {
    if (root.left !== null) nthNodeInorderTraversal(root.left, n);
    // On each call, increment count

    count += 1;
    if (count === n) {
      console.log(root.val);
    }
    if (root.right !== null) nthNodeInorderTraversal(root.right, n);
  }
};
nthNodeInorderTraversal(root, 2);
