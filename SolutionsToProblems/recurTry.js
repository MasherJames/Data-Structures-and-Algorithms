// const arrDiff = (arr1, arr2) => arr1.filter(e => arr2.indexOf(e) === -1);
// console.log(arrDiff([1, 2], [1]));
// const isEven = n => n % 2 === 0;
// const partitionOn = (pred, items) => {
//   const even = items.filter(e => func(e));
//   const odd = items.filter(e => even.indexOf(e) === -1);
//   const both = [...odd, ...even];
//   const indx = both.indexOf(even[0]);
//   return indx;
// };
// console.log(partitionOn(isEven, [1, 2, 3, 4, 5, 6]));
// const isEven = n => n % 2 === 0;

let i = 0;
let k = "HO-Ho-ho".replace(/ho/gi, () => ++i);
console.log(k);

let str = "My name is.James and.am 12";
let res = str.replace(/[. ]/g, "-");
console.log(res);
