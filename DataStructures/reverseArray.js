const reverseArray = array => {
  for (let i = 0; i < array.length / 2; i++) {
    let tempHolder = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempHolder;
  }
  return array;
};
console.log(reverseArray(["this", "is", "my", "yard", "james"]));
