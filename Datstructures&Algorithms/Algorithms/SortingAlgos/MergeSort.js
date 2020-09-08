const merge = (arr1, arr2, originalArr) => {
  let arr1Indx = 0,
    arr2Indx = 0,
    originalArrIndx = 0;

  while (arr1Indx < arr1.length && arr2Indx < arr2.length) {
    if (arr1[arr1Indx] <= arr2[arr2Indx]) {
      originalArr[originalArrIndx] = arr1[arr1Indx];
      arr1Indx++;
    } else {
      originalArr[originalArrIndx] = arr2[arr2Indx];
      arr2Indx++;
    }
    originalArrIndx++;
  }

  // Execution hits this block if eny of the two arrays had more elements
  while (arr1Indx < arr1.length) {
    originalArr[originalArrIndx] = arr1[arr1Indx];
    arr1Indx++;
    originalArrIndx++;
  }
  while (arr2Indx < arr2.length) {
    originalArr[originalArrIndx] = arr2[arr2Indx];
    arr2Indx++;
    originalArrIndx++;
  }
  return originalArr;
};
//
const mergeTwo = (arr1, arr2, originalArr) => {
  let arr1Indx = 0;
  let arr2Indx = 0;
  let originalArrIndx = 0;
  while (arr1Indx < arr1.length || arr2Indx < arr2.length) {
    if (
      arr2Indx === arr2.length ||
      (arr1Indx < arr1.length && arr1[arr1Indx] <= arr2[arr2Indx])
    ) {
      originalArr[originalArrIndx++] = arr1[arr1Indx++];
    } else {
      originalArr[originalArrIndx++] = arr2[arr2Indx++];
    }
  }
  return originalArr;
};

const mergeSort = (arr) => {
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
  return mergeTwo(mergeSort(firstHalf), mergeSort(secondHalf), arr);
};

console.log(mergeSort([54, 26, 93, 17, 77, 31, 44, 55, 20]));
console.log(mergeSort([1, 4, 6, 9, 2, 3, 4, 8, 10]));
