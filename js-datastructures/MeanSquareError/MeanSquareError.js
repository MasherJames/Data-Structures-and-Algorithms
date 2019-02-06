const solution = (firstArray, secondArray) => {
  const res =
    firstArray
      .map((e, i) => Math.abs(e - secondArray[i]))
      .map(e => e ** 2)
      .reduce((acc, curr) => acc + curr) / firstArray.length;
  return res;
};
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));
