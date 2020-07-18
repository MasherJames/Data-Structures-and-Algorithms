const sumIntervals = intervals => {
  const stack = [];
  const sorted = intervals.sort((f, s) => f[0] - s[0]);
  stack.push(sorted[0]);
  for (let i = 1; i < sorted.length; i++) {
    let curr = stack[0];
    if (curr[1] < sorted[i][0]) {
      stack.push(sorted[i]);
    } else if (curr[1] < sorted[i][1]) {
      curr[1] = sorted[i][1];
    }
  }
  return stack.map(e => e[1] - e[0]).reduce((p, c) => p + c);
};
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));
