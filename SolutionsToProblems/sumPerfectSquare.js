const SumsPerfectSquare = num => {
  let squares = [];
  let all = [];
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    squares.push(i * i);
  }
  for (let sq of squares) {
    sum += sq;
    all.push(sq);
  }
  return squares;
};
console.log(SumsPerfectSquare(15));
