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

const binaryTreeLevelOrderTraversal = (root) => {
  // Initialize the queue with the root value
  let queue = [root];
  const response = [];

  // run this section if and only if the last visited node has at least one
  // child
  while (queue.length > 0) {
    // array that holds next level values
    const nextLevel = [];
    // current level array
    const currentLevel = [];

    for (let value of queue) {
      // Push value of the current node
      currentLevel.push(value.val);
      /*
        The two ifs checks if the current node has children
        and records that as the next level from the left
      */
      if (value.left !== null) {
        nextLevel.push(value.left);
      }
      if (value.right !== null) {
        nextLevel.push(value.right);
      }
    }
    // Assign next level to the queue
    queue = nextLevel;
    // push the current level to the result
    response.push(currentLevel);
  }
  return response;
};
console.log(binaryTreeLevelOrderTraversal(root));
