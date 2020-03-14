const coil = n => {
  // If n is not a number or its value is less
  // than 1, it should return an empty array
  if (typeof n !== "number" || n < 1) {
    return [];
  }
  // Else return the required results
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = Array(n);
  }
  return result;
};
console.log(coil(2));
console.log(coil(0));
console.log(coil("4"));
