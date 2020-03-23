/*
VARIABLES USED
n => The function argument
rowIndx => keeps track of the current row pos
maxRowIndx => keeps track of the max row indx
minRowIndx => '' ............... min .......
colIndx => keeps track of the current col pos
maxColIndx => keeps track of the max col indx
minColIndx => '' ............... min .......
*/

// Move Right
const moveRight = (
  rowIndx,
  colIndx,
  minRowIndx,
  maxRowIndx,
  minColIndx,
  maxColIndx,
  matrix,
  currentNumber
) => {
  /*
    If current number is >= n^2, stop.
    Eg, if n = 4, stop at currNum = 16
    Comment applies to checks in other funcs
   */

  if (currentNumber >= matrix.length * matrix.length) {
    return;
  }
  /*
    At the current row, navigate to your right increasing by
    increasing the column number
   */
  while (colIndx < maxColIndx) {
    matrix[rowIndx][colIndx] = currentNumber;
    currentNumber += 1;
    colIndx += 1;
  }
  moveDown(
    rowIndx,
    colIndx,
    minRowIndx,
    maxRowIndx,
    minColIndx,
    maxColIndx - 1,
    matrix,
    currentNumber
  );
};

// Move Down
const moveDown = (
  rowIndx,
  colIndx,
  minRowIndx,
  maxRowIndx,
  minColIndx,
  maxColIndx,
  matrix,
  currentNumber
) => {
  if (currentNumber > matrix.length ** 2) {
    return;
  }
  while (rowIndx < maxRowIndx) {
    matrix[rowIndx][colIndx] = currentNumber;
    currentNumber += 1;
    rowIndx += 1;
  }
  moveLeft(
    rowIndx,
    colIndx,
    minRowIndx,
    maxRowIndx - 1,
    minColIndx,
    maxColIndx,
    matrix,
    currentNumber
  );
};

// Move Left
const moveLeft = (
  rowIndx,
  colIndx,
  minRowIndx,
  maxRowIndx,
  minColIndx,
  maxColIndx,
  matrix,
  currentNumber
) => {
  if (currentNumber > matrix.length ** 2) {
    return;
  }
  while (colIndx > minColIndx) {
    // console.log(currentNumber);
    // console.log(colIndx, minColIndx);
    matrix[rowIndx][colIndx] = currentNumber;
    currentNumber += 1;
    colIndx -= 1;
  }
  moveUp(
    rowIndx,
    colIndx,
    minRowIndx,
    maxRowIndx,
    minColIndx + 1,
    maxColIndx,
    matrix,
    currentNumber
  );
};

// Move Up
const moveUp = (
  rowIndx,
  colIndx,
  minRowIndx,
  maxRowIndx,
  minColIndx,
  maxColIndx,
  matrix,
  currentNumber
) => {
  if (currentNumber > matrix.length ** 2) {
    return;
  }
  while (rowIndx > minRowIndx) {
    matrix[rowIndx][colIndx] = currentNumber;
    currentNumber += 1;
    rowIndx -= 1;
  }
  moveRight(
    rowIndx,
    colIndx,
    minRowIndx + 1,
    maxRowIndx,
    minColIndx,
    maxColIndx,
    matrix,
    currentNumber
  );
};

const clockWiseSpiral = n => {
  if (n < 1 || typeof n !== "number") {
    return [];
  }

  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = Array(n);
  }
  let currentNumber = 1;
  moveRight(0, 0, 1, n - 1, 0, n - 1, matrix, currentNumber);

  return matrix;
};

// console.log(clockWiseSpiral(1));
// console.log(clockWiseSpiral(2));
// console.log(clockWiseSpiral(3));
console.log(clockWiseSpiral(4));
// console.log(clockWiseSpiral(5));
