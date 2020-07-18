const solve = (
  rowIndx,
  minRowIndx,
  maxRowIndx,
  colIndx,
  minColIndx,
  maxColIndx,
  res,
  matrix,
  direction
) => {
  if (direction === "R") {
    while (colIndx < maxColIndx) {
      res.push(matrix[rowIndx][colIndx]);
      colIndx++;
    }
    solve(
      rowIndx,
      minRowIndx,
      maxRowIndx,
      colIndx,
      minColIndx,
      maxColIndx,
      res,
      matrix,
      "D"
    );
  }
  if (direction === "D") {
    while (rowIndx < maxRowIndx) {
      res.push(matrix[rowIndx][colIndx]);
      rowIndx++;
    }
    solve(
      rowIndx,
      minRowIndx,
      maxRowIndx,
      colIndx,
      minColIndx,
      maxColIndx,
      res,
      matrix,
      "L"
    );
  }
  if (direction === "L") {
    while (colIndx > minColIndx) {
      res.push(matrix[rowIndx][colIndx]);
      colIndx--;
    }
    solve(
      rowIndx,
      minRowIndx,
      maxRowIndx,
      colIndx,
      minColIndx,
      maxColIndx,
      res,
      matrix,
      "U"
    );
  }
  if (direction === "U") {
    while (rowIndx > minRowIndx) {
      res.push(matrix[rowIndx][colIndx]);
      rowIndx--;
    }
    solve(
      rowIndx,
      minRowIndx,
      maxRowIndx,
      colIndx,
      minColIndx,
      maxColIndx,
      res,
      matrix,
      "R"
    );
  }
};

const print2DArrInSpiralForm = matrix => {
  const res = [];
  solve(0, 1, matrix.length - 1, 0, 0, matrix.length - 1, res, matrix, "R");
  return res;
};

const matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];
console.log(print2DArrInSpiralForm(matrix));
