const operations = {
  $: (f, s) => f / s,
  "*": (f, s) => f * s,
  "-": (f, s) => f - s,
  "+": (f, s) => f + s
};

const operate = (parts, operator, func) => {
  for (let i = 0; i < parts.length; i++) {
    const currVal = parts[i];
    if (currVal === operator) {
      const result = func(parts[i - 1], parts[i + 1]);
      parts.splice(i - 1, 3, result);
      i = i - 1;
    }
  }
};

const calculate = route => {
  const parts = route.split("").reduce(
    ({ parts, currentNumber }, currVal, i, arr) => {
      if (operations[currVal]) {
        parts = [...parts, +currentNumber, currVal];
        currentNumber = "";
      } else {
        currentNumber += currVal;
      }
      if (i === arr.length - 1) {
        return [...parts, +currentNumber];
      }
      return { parts, currentNumber };
    },
    {
      parts: [],
      currentNumber: ""
    }
  );
  // let parts = [];
  // let currentNumber = "";
  // for (let currVal of route) {
  //   if (operations[currVal]) {
  //     parts.push(+currentNumber, currVal);
  //     currentNumber = "";
  //   } else {
  //     currentNumber += currVal;
  //   }
  // }
  // parts.push(+currentNumber);

  Object.keys(operations).forEach(operation => {
    operate(parts, operation, operations[operation]);
  });
  return isNaN(parts[0]) ? "400: Bad request" : parts[0];
};

console.log(calculate("1"), 1);
console.log(calculate("1.1"), 1.1);

console.log(calculate("1+1"), 2);
console.log(calculate("1-1"), 0);
console.log(calculate("2$2"), 1);
console.log(calculate("2*2"), 4);

console.log(calculate("1.1+1.9"), 3);
console.log(calculate("9$4"), 2.25);
console.log(calculate("1.5*3"), 4.5);
console.log(calculate("5-43.2"), -38.2);

console.log(calculate("5+5+5+5"), 20);
console.log(calculate("5-5-5-5"), -10);
console.log(calculate("5*5*5*5"), 625);
console.log(calculate("5$5$5$5"), 0.04);

console.log(calculate("1+1-1"), 1);
console.log(calculate("5*6$2+5-10"), 10);
console.log(calculate("1*1*1*1*1*1$1$1$1$1+1-1+9-1"), 9);
console.log(calculate("1000$2.5$5+5-5+6$6"), 81);
