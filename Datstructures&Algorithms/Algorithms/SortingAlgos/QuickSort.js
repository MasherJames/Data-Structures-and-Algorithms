// const QuickSort = arr => {
//   const toSort = [...arr];

//   if (toSort.length <= 1) {
//     return toSort;
//   }

//   //Get the initial position as the pivot values
//   const pivotValue = toSort.shift();
//   const equals = [pivotValue];
//   const lesser = [];
//   const greater = [];

//   // On every loop, compare each value with the pivot value
//   // If the value is lesser, push to lesser arr
//   // if greater, push to greater arr
//   // If equal to pivot, push to equal
//   while (toSort.length) {
//     const currentValue = toSort.shift();
//     if (pivotValue === currentValue) {
//       equals.push(currentValue);
//     } else if (currentValue < pivotValue) {
//       lesser.push(currentValue);
//     } else {
//       greater.push(currentValue);
//     }
//   }

//   // Recursivly call for lesser and greater
//   const lessSorted = QuickSort(lesser);
//   const greaterSorted = QuickSort(greater);

//   return lessSorted.concat(equals, greaterSorted);
// };

const partition = (arr, start, end) => {
  // pick the last element as pivot
  const pivot = arr[end];
  // used to track the current position when partitioning
  let partitionIndex = start;

  let temp = null;

  // loop from start to last element before pivot, replace all lesser elements to the left
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      /* For any lesser values, push them to the far left */
      temp = arr[partitionIndex];
      arr[partitionIndex] = arr[i];
      arr[i] = temp;
      // increase this to avoid displacement in the next swap
      partitionIndex++;
    }
  }
  // put all greater elements to the right of the pivot
  temp = arr[partitionIndex];
  arr[partitionIndex] = arr[end];
  arr[end] = temp;
  // return pivot index to determine where the next partition starts
  return partitionIndex;
};

const QuickSort = (arr, start, end) => {
  /*
  Run this if start is less than end
  */
  if (start < end) {
    const partitionIndex = partition(arr, start, end);
    QuickSort(arr, start, partitionIndex - 1);
    QuickSort(arr, partitionIndex + 1, end);
    return arr;
  }
};

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(QuickSort(list, 0, list.length - 1));
