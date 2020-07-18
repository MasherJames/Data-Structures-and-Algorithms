const QuickSort = arr => {
  const toSort = [...arr];

  if (toSort.length <= 1) {
    return toSort;
  }

  //Get the initial position as the pivot values
  const pivotValue = toSort.shift();
  const equals = [pivotValue];
  const lesser = [];
  const greater = [];

  // On every loop, compare each value with the pivot value
  // If the value is lesser, push to lesser arr
  // if greater, push to greater arr
  // If equal to pivot, push to equal
  while (toSort.length) {
    const currentValue = toSort.shift();
    if (pivotValue === currentValue) {
      equals.push(currentValue);
    } else if (currentValue < pivotValue) {
      lesser.push(currentValue);
    } else {
      greater.push(currentValue);
    }
  }

  // Recursivly call for lesser and greater
  const lessSorted = QuickSort(lesser);
  const greaterSorted = QuickSort(greater);

  return lessSorted.concat(equals, greaterSorted);
};

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(QuickSort(list));
