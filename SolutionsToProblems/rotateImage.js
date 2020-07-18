const rotateSquareMatrixClockwise = (matrix) => {
  // Check if matrix exists and is a square
  const matrixLen = matrix.length;
  if (matrixLen < 1 || matrixLen !== matrix[0].length) {
    return -1;
  }

  // Transpose the matrix
  for (let i = 0; i < matrixLen; i++) {
    for (let j = i; j < matrixLen; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // switch columns
  for (let i = 0; i < matrixLen; i++) {
    for (let j = 0; j < Math.floor(matrixLen / 2); j++) {
      let temp = matrix[i][matrixLen - 1 - j];
      matrix[i][matrixLen - 1 - j] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  return matrix;
};
const m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(rotateSquareMatrixClockwise(m1));
console.log(rotateSquareMatrixClockwise(m2));
