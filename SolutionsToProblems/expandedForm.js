const splitNum = num => {
  let numStr = String(num)
    .split("")
    .reverse();
  let res = [];
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "0") {
      res.push(numStr[i]);
    } else {
      res.push(numStr[i] + "0".repeat(i));
    }
  }
  return res
    .reverse()
    .filter(e => e !== "0")
    .join("+");
};
console.log(splitNum(102));

const splitNum = num => {
  let numStr = String(num)
    .split("")
    .reverse()
    .map((elem, i) => elem * Math.pow(10, i))
    .filter(e => e > 0)
    .reverse()
    .join("+");
  return numStr;
};
console.log(splitNum(120));
