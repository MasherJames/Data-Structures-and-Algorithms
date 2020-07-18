const longestSumSubArray = (arr, sum) => {
  let result = [-1];
  let currentSum = 0;
  let leftIndx = 0;
  let rightIndx = 0;

  while (rightIndx < arr.length) {
    currentSum += arr[rightIndx];
    while (leftIndx < rightIndx && currentSum > sum) {
      // Subtract the current left and move index one step ahead
      currentSum -= arr[leftIndx];
      leftIndx++;
    }
    /*
    This section update the results by checking if currentSum equals sum
    and the diff btwn leftIndx & rightIndx is max or
    The first match is found, initial left and right index are updated
     */
    if (
      currentSum === sum &&
      (result.length === 1 || result[1] - result[0] < rightIndx - leftIndx)
    ) {
      result = [leftIndx + 1, rightIndx + 1];
    }
    rightIndx++;
  }
  return result;
};

const longestSubArray2 = (arr, sum) => {};

const arr = [1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10];
console.log(longestSumSubArray(arr, 15));
