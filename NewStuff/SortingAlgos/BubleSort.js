const bubbleSort = arr => {
  for (let i = arr.length - 1; i >= 1; i--) {
    /*
    For every loop, from the initial pos,
    compare curr and next. if curr is greater than next,
    swap them else, go to the next indx
     */
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(bubbleSort(list));
