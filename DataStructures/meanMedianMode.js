const getMeanModeMedian = array => {
  return {
    mean: getMean(array),
    mode: getMode(array),
    median: getMedian(array)
  };
};

const getMean = array => {
  const sum = array.reduce((cur, acc) => {
    return cur + acc;
  }, 0);
  return sum / array.length;
  ``;
};

const getMedian = array => {
  array = array.sort((f, s) => f - s);
  if (array.length % 2 === 0) {
    return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
  }
  return array[Math.floor(array.length / 2)];
};

const getMode = array => {
  let numObj = {};
  array.forEach(num => {
    if (!numObj[num]) {
      numObj[num] = 0;
    }
    numObj[num]++;
  });
  let maxObj = 0;
  let modes = [];
  //looping over the object and checking the key with the highest value
  for (let num in numObj) {
    if (numObj[num] > maxObj) {
      modes = [num];
      maxObj = numObj[num];
    } else if (numObj[num] === maxObj) {
      modes.push(num);
    }
    if (modes.length === Object.keys(numObj).length) {
      modes = [];
    }
  }
  return modes;
};

console.log(getMeanModeMedian([1, 2, 3, 4, 5, 4, 6, 1]));
