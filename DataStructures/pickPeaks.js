const pickPeaks = arr => {
  let res = { pos: [], peaks: [] };
  let pos = -1;
  if (arr.length === 0) {
    return res;
  }

  arr.forEach((array, i) => {
    if (arr[i] > arr[i - 1]) {
      pos = i;
    } else if (arr[i] < arr[i - 1] && pos !== -1) {
      res.pos.push(pos);
      res.peaks.push(arr[pos]);
      pos = -1;
    }
  });
  return res;
};
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));

const pickPeaks = arr => {
  let pSlope = 0;
  let pi = 0;
  var result = { pos: [], peaks: [] };
  if (arr.length === 0) return result;

  arr.reduce(function(p, c, i) {
    if (pSlope > 0 && c - p < 0) {
      result.peaks.push(p);
      result.pos.push(pi);
    }
    if (c - p != 0) {
      pi = i;
      pSlope = c - p;
    }
    return c;
  });
  return result;
};
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
