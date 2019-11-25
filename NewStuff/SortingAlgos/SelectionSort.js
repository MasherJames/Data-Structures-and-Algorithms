const SelectionSort = arr => {
  for (let i = arr.length - 1; i >= 1; i--) {
    // Assume zero index is max
    let maxPosition = 0;
    for (let j = 1; j <= i; j++) {
      // Serach for the max in the array and re-assing to maxpos
      if (arr[j] > arr[maxPosition]) {
        maxPosition = j;
      }
    }
    // For Every loop, get the max value an place in array from the last indx
    let temp = arr[i];
    arr[i] = arr[maxPosition];
    arr[maxPosition] = temp;
  }
  return arr;
};
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(SelectionSort(list));

const SecondSelectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    // For every val of i, assume its the min
    let min_indx = i;
    // from i + 1 get the min and re-assign to min_indx
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_indx]) {
        min_indx = j;
      }
    }
    // for every loop, arrange min from the begging of the array
    let temp = arr[i];
    arr[i] = arr[min_indx];
    arr[min_indx] = temp;
  }
  return arr;
};
const ndlist = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(SecondSelectionSort(list));
