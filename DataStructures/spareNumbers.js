// const decimalToBinary = dec => {
//   let binary = [];
//   while (dec > 0) {
//     if (dec % 2 === 1) {
//       binary.splice(0, 0, 1);
//       dec = (dec - 1) / 2;
//     } else {
//       binary.splice(0, 0, 0);
//       dec /= 2;
//     }
//   }
//   return binary.join("");
// };
// console.log(decimalToBinary(21));

const smallestSparseNumber = num => {
  const bin = num.toString(2);
  const binArr = bin.split("").map(e => parseInt(e));
  return binArr.reduce((f, s) => {
    console.log(f + s);
    if (f + s === 2) {
      return "wrong";
    }
  });
};
console.log(smallestSparseNumber(22));
