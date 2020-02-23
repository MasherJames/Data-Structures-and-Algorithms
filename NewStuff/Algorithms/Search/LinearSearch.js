const LinearSearch = (arr, val) => {
  const found = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      found.push({ index: i, value: arr[i] });
    }
  }
  return found.length ? found : -1;
};

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(LinearSearch(list, 770));
