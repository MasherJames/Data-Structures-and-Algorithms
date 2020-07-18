const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  let middleIndx = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndx);
  let lastHalf = arr.slice(middleIndx);

  return merge(mergeSort(firstHalf), mergeSort(lastHalf));
};

const merge = (arr1, arr2) => {
  let result = [];
  while (arr1.length && arr2.length) {
    let minValue;
    // on comparing the 1st elements of both arrays, and removing the smaller of the two
    if (arr1[0] < arr2[0]) {
      minValue = arr1.shift();
    } else {
      minValue = arr2.shift();
    }
    result.push(minValue);
  }

  // Case under where there elements still left in any of the aray
  if (arr1.length) {
    // if the arr1 has elements still left, concat them with the array with the sorted elements
    result = result.concat(arr1);
  } else {
    // if the arr2 has elements still left, concat them with the array with the sorted elements
    result = result.concat(arr2);
  }
  return result;
};

console.log(mergeSort([1, 600, 58, 90, 23, 12, 1, -1, -70, 456]));
