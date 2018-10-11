function expandedForm(num) {
  var arr = [];
  var str = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "0") {
      str = str + num[i];
      if (i === num.length - 1) {
        arr.push(str);
        str = "";
      }
      for (var j = i + 1; j < num.length; j++) {
        str = str + "0";
        if (j === num.length - 1) {
          arr.push(str);
          str = "";
        }
      }
    }
  }
  return arr.join(" + ");
}

// const splitNum = num =>{
//   let numStr = String(num).split('').reverse()
//   let res = []
//   for(let i = 0 ; i < numStr.length ; i++){
//     if(numStr[i] === '0'){
//       res.push(numStr[i])
//     }else {
//       res.push(numStr[i] + ('0'.repeat(i)))
//     }
//   }
//   return res.reverse().filter(e => e !== '0').join('+')
// }
// console.log(splitNum(12));

const splitNum = num => {
  let numStr = String(num)
    .split("")
    .reverse();
  let m = numStr
    .map((n, e) => n * Math.pow(10, e))
    .filter(e => e > 0)
    .reverse()
    .join("+");
  return m;
};
console.log(splitNum(12));
