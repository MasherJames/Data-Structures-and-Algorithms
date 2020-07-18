const MergeSort = (arr, item) => {
  const sortedArr = arr.sort((f, s) => f - s);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr[mid] === item) {
    return item;
  } else if (sortedArr[mid] > item) {
    return MergeSort(sortedArr.slice(0, mid), item);
  } else if (sortedArr[mid] < item) {
    return MergeSort(sortedArr.slice(mid + 1), item);
  } else {
    return -1;
  }
};
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(MergeSort(list, 1));
