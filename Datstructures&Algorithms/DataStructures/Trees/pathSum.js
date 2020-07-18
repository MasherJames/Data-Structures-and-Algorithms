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

const hasPathSum = (root, sum) => {
  // If no root, the sum is exhausted
  if (root === null) {
    return sum === 0;
  } else {
    let returnValue = 0;
    const sumRemainder = sum - root.val;
    // If the root is the only node and the sum is exhausted
    if (sumRemainder === 0 && root.left === null && root.right === null) {
      return true;
    }
    // recursively traverse left subtree until its null, if it exists
    if (root.left !== null) {
      returnValue = returnValue || hasPathSum(root.left, sumRemainder);
    }
    // recursively traverse right subtree until its null, if it exists

    if (root.right !== null) {
      returnValue = returnValue || hasPathSum(root.right, sumRemainder);
    }

    return returnValue;
  }
};

const hasPathSum2 = (root, sum) => {
  if (root === null) {
    return false;
  } else {
    if (sum === root.val && root.left === null && root.right === null) {
      return true;
    }
    return (
      hasPathSum2(root.left, sum - root.val) ||
      hasPathSum2(root.right, sum - root.val)
    );
  }
};
console.log(hasPathSum(root, 52));
console.log(hasPathSum2(root, 68));
