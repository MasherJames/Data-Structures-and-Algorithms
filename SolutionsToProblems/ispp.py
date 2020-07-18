/ const isPP = (n) => {
//   let res = []
//   for(let i = 1 ; i <= n ; i++){
//     for(let j = 2 ; j < n ; j ++){
//       if((i ** j) === n){
//         res.push(i);
//         res.push(j);
//       }
//     }
//   }
//   if(res.length > 0){
//     return res
//   }
//   return null;
// }
// console.log(isPP(5))

const isPP = (n) => {
  let i = 2;
  let j = 2;
  let max = Math.floor(n / 2);
  let res = Math.pow(i, j);
  while(i <= max){
    let j = 2;
    while(Math.pow(i, j) <= n){
      if(n === Math.pow(i, j)){
        return [i, j]
      } else {
        j += 1;
      }
      i += 1;
     }
  }
  return null
}
console.log(isPP(5))

