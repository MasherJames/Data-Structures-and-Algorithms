const merge = (l1, l2) => {
  const res = [];
  while (l1.length && l2.length) {
    if (l1[0] <= l2[0]) {
      res.push(l1.shift(l1[0]));
    } else {
      res.push(l2.shift(l2[0]));
    }
  }
  return res.concat(l1, l2);
};

const mergeSort = arr => {
  // If array has len less than two, it is sorted already
  if (arr.length < 2) {
    return arr;
  }
  // Else, Split the array
  const mid = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid, arr.length);

  /*
   Recursvly split the array by two
   Until you canno split them further,
   call merge func to sort while merging
   */
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};
console.log(mergeSort([54, 26, 93, 17, 77, 31, 44, 55, 20]));
