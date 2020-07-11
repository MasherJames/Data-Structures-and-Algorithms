const solve = (m) => {
  let x;
  const a = m;
  const b = m * -2 - 1;
  const c = m;
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    x = (-b - Math.sqrt(discriminant)) / (2 * a);
  }
  return x;
};
console.log(solve(2.0));
