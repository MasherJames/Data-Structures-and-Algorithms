const twoSum = (arr, sum) => {
  let pairs = [];
  let hashtable = [];
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let counterPart = sum - curNum;
    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([curNum, counterPart]);
    }
    hashtable.push(curNum);
  }
  return pairs;
};
console.log(twoSum([1, 6, 4, 5, 3, 3], 7));

// const twoSum = (arr, target) => {
//   let map = {},
//     results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (map[arr[i]] !== undefined) {
//       results.push([map[arr[i]], arr[i]]);
//     } else {
//       map[target - arr[i]] = arr[i];
//     }
//   }
//   return results;
// };
// console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
