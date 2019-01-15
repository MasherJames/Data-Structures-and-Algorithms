const largestInteger = arr => {
  const mod = [];
  let ans = "";
  const lMax = String(Math.max.apply(null, arr)).length + 1;
  for (let num of arr) {
    const newNum = String(num).repeat(lMax);
    mod.push([Number(newNum.slice(0, lMax)), num]);
  }
  mod.sort().reverse();
  for (let elem of mod) {
    ans += elem[1];
  }
  return ans;
};
console.log(largestInteger([10, 7, 76, 415]));
