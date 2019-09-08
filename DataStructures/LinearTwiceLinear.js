const perfectPlace = (arr, num) => {
  const isSmall = arr.every(el => el > num);
  const isLarge = arr.every(el => el < num);

  if (isSmall) {
    arr.unshift(num);
  } else if (isLarge) {
    arr.push(num);
  } else {
    arr.forEach((e, i) => {
      if (e > num && arr[i - 1] < num) {
        arr.splice(i, 0, num);
      }
    });
  }
  return arr;
};

const nLinear = (m, n) => {
  let linArr = [1];
  const linearUsed = [1];

  // use 1
  m.forEach(e => {
    const num = e * 1 + 1;
    perfectPlace(linArr, num);
  });

  while (linArr.length <= n + 1) {
    linArr.forEach(e => {
      if (!linearUsed.includes(e)) {
        m.forEach(m => {
          perfectPlace(linArr, e * m + 1);
        });
        linearUsed.push(e);
      }
    });
  }

  return linArr;
};
console.log(nLinear([17, 13, 2, 4, 11, 16, 9], 151));

const dblLinear = n => {
  const twiceLin = [1];
  const twiceLinearUsed = [1];

  // use 1
  const x = 2 * 1 + 1;
  const y = 3 * 1 + 1;
  perfectPlace(twiceLin, x);
  perfectPlace(twiceLin, y);

  while (twiceLin.length <= n) {
    twiceLin.forEach(e => {
      if (!twiceLinearUsed.includes(e)) {
        const x = 2 * e + 1;
        const y = 3 * e + 1;
        perfectPlace(twiceLin, x);
        perfectPlace(twiceLin, y);
        twiceLinearUsed.push(e);
      }
    });
  }

  return twiceLin[n];
};
console.log(dblLinear(100));
