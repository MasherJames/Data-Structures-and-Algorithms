// const noRemainder = arr => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       res.push([arr[i], arr[j]]);
//     }
//   }
//   return res;
// };
// console.log(noRemainder([3, 5, 10, 20, 21]));

// const noRemainder = arr => {
//   let resArr = [];
//   arr.map((e, i, a) => {
//     let part = a.splice(i, 1);
//     resArr.push(a);
//   });
//   return resArr;
// };
// console.log(noRemainder([3, 5, 10, 20, 21]));
// const t = [3, 5, 10, 20, 21];
// const kk = t.splice(0, 1);
// console.log(kk);
// console.log(t);

// const noRemainder = arr => {
//   const res = [];
//   const kk = [];
//   for (let i = 0; i < arr.length; i++) {
//     const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     for (let j = 0; j < newArr.length; j++) {
//       res.push([arr[i], newArr[j]]);
//     }
//   }
//   for (let k = 0; k < res.length; k++) {
//     console.log([res[k][0], res[k][1]]);
//     // console.log(res[k][1]);
//     console.log(res[k][0] % res[k][1]);
//     if (res[k][0] % res[k][1] === 0 && res[k][1] % res[k][0] === 0) {
//       kk.push(res[k]);
//     }
//   }
//   return kk;
// };
// console.log(noRemainder([3, 5, 10, 20, 21]));
