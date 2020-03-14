class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Using a recursive approach
const inorderTraversal = root => {
  const response = [];
  helper(root, response);

  return response;
};

const helper = (root, response) => {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, response);
    }
    response.push(root.val);
    if (root.right !== null) {
      helper(root.right, response);
    }
  }
};

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// console.log(inorderTraversal(root));

// Using a stack
const inorderTraversalStack = root => {
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
    // code get here when you reach farthest left node
    // Pop the last item
    current = stack.pop();
    // Push to response
    response.push(current.val);
    // traverse to right after vising root
    current = current.right;
  }
  return response;
};
// console.log(inorderTraversalStack(root));

const nthNodeInorderTraversal = (root, n) => {
  let count = [0];
  if (root !== null) {
    console.log(count);
    if (count <= n) {
      //   if (root.left !== null) {
      nthNodeInorderTraversal(root.left, n);
      count[0] += 1;
      //   }
      if (count[0] === n) {
        return root.val;
      }
      //   if (root.right !== null) {
      nthNodeInorderTraversal(root.right, n);
      // count += 1;
      //   }
    } else {
      console.log("dfgh");
      return -1;
    }
  } else {
    return -1;
  }
};
console.log(nthNodeInorderTraversal(root, 4));
