const allSquaredPairs = num => {
  let numSqrt = Math.floor(Math.sqrt(num));
  let squareSum = [];
  for (let i = 0; i <= numSqrt; i++) {
    for (let j = i; j <= numSqrt; j++) {
      if (i * i + j * j === num) {
        squareSum.push([i, j]);
      }
    }
  }
  return squareSum;
};
console.log(allSquaredPairs(2));
