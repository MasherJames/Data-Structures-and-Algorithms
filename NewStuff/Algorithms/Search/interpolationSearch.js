// const InterpolationSearch = (arr, val) => {
//   arr = arr.sort((f, s) => f - s);

//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high && val > arr[low] && val < arr[high]) {
//     if (low === high) {
//       if (arr[low] === val) {
//         return val;
//       }
//       return -1;
//     }

//     const position =
//       low +
//       Math.floor(((high - low) / (arr[high] - arr[low])) * (val - arr[low]));

//     if (arr[position] === val) return val;
//     if (arr[position] < val) {
//       low = position + 1;
//     } else {
//       high = position - 1;
//     }
//   }
//   return -1;
// };

// const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
// console.log(InterpolationSearch(list, 54));
