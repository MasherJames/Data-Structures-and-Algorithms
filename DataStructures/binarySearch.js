// given an arrray and an element, return its index

const BinarySearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;
  while (low <= high) {
    // Get the mid point
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < value) {
      // Means it is on the right hand side of the array
      low = mid + 1;
    } else if (element > value) {
      // Means it is on the left hand side of the array
      high = mid - 1;
    } else {
      // Means value and the middle value are equal
      return mid;
    }
  }
  // Means the conditions in the while block were not met and then the value is not present
  return -1;
};
console.log(BinarySearch([1, 2, 3, 4, 5, 6], 9));
