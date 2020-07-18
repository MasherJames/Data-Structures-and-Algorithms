// const occurrenceMatch = (string, pattern) => {
//   let re = new RegExp(pattern, "g");
//   let res = string.match(re);
//   return res.map((e, i, arr) => string.indexOf(e));
// };
// console.log(occurrenceMatch("abracadabra", "abr"));

// const occurrenceMatch = (string, pattern) => {
//   let res = string.search(pattern);
//   return res;
// };
// console.log(occurrenceMatch("bracadabra", "abr"));

const largestSum = arr => {
  let largest = 0;
  let maxNum = 0;

  for (let num of arr) {
    maxNum += num;
    if (maxNum < 0) {
      maxNum = 0;
    } else if (largest < maxNum) {
      largest = maxNum;
    }
  }
  return largest;
};
console.log(largestSum([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));
