// const fibonacci = position => {
//   if (position === 0) {
//     return 0;
//   }
//   if (position < 3 && position > 0) {
//     return 1;
//   }
//   return fibonacci(position - 1) + fibonacci(position - 2);
// };
// console.log(fibonacci(0));

// const appendObjArr = str => {
//   const res = [];
//   const strArr = str.split("");
//   for (let i = 0; i < strArr.length; i++) {
//     let val = strArr[i];
//     res.push({ val });
//     if (res.indexOf({ val }) < 0) {
//       val = 0;
//     }
//     val++;
//   }
//   return res;
// };
// console.log(appendObjArr("stress"));

//Fibonacci of time complexity o(n)
const fibbonaci = n => {
  let a = 0,
    b = 1,
    c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};
console.log(fibbonaci(9));
