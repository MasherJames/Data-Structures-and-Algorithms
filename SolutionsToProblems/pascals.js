const pascals = n => {
  const pascalsTriangle = [];
  for (let i = 0; i <= n; i++) {
    let current = i;
    if (i === 0) {
      // Push 1 for the 1st row
      pascalsTriangle.push([1]);
    } else if (i === 1) {
      // Push 1, 1 for the second row
      pascalsTriangle.push([1, 1]);
    } else {
      // Get the previous array to calculate values for the current level
      let prevArray = pascalsTriangle[current - 1];
      //Values for the current level, beginning and ending with 1
      let calculatedVal = [];
      calculatedVal.push(1);
      prevArray.forEach((el, i) => {
        // Get the current value and add it to the next value
        // Do this as long as the current value is not the last value
        if (i !== prevArray.length - 1) {
          calculatedVal.push(el + prevArray[i + 1]);
        }
      });
      calculatedVal.push(1);
      //Push the generated array for this level to the result
      pascalsTriangle.push(calculatedVal);
    }
  }
  return pascalsTriangle;
};
console.log(pascals(10));
