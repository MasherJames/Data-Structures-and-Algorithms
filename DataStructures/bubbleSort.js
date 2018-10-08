const bubbleSort = array => {
  //Looping from backwards
  for (let i = array.length; i > 0; i--) {
    // Looping from the 1st index and swithing where necessary and lessing the last index by one
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let numTemp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = numTemp;
      }
    }
  }
  return array;
};
console.log(bubbleSort([8, 9, 4, 6, 7, 3]));
