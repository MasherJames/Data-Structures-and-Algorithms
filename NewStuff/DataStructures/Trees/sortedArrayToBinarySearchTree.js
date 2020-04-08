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

/*
For BST, left subtree values should be less than root
while right subtree should be greater than root
For a Balanced BST, the height of any subtree should not exceed
by one
*/

const sortedArrToBinarySearchTree = (arr) => {
  if (!arr.length > 0) {
    return null;
  }
  const rootIndx = Math.floor(arr.length / 2);
  const rootValue = arr[rootIndx];

  //Initial right and left node values
  let leftNodeValues = arr.slice(0, rootIndx);
  let rightNodeValues = arr.slice(rootIndx + 1);

  const root = new Node(rootValue);

  root.left = sortedArrToBinarySearchTree(leftNodeValues);
  root.right = sortedArrToBinarySearchTree(rightNodeValues);

  return root;
};
const arr = [-10, -3, 0, 5, 9];
console.log(sortedArrToBinarySearchTree(arr));
