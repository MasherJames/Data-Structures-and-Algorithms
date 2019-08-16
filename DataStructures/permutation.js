const permutations = string => {
  let res = [];
  console.log("called start");
  if (string.length === 1) {
    res.push(string);
    return res;
  }

  for (let i = 0; i < string.length; i++) {
    let curLet = string[i];
    // console.log(curLet)
    let newStr = string.substring(0, i) + string.substring(i + 1);
    let recursiveRes = permutations(newStr);
    // console.log(recursiveRes);
    for (let j = 0; j < recursiveRes.length; j++) {
      res.push(curLet + recursiveRes[j]);
    }
    // console.log("inside");
    return [...new Set(res)];
  }
};

// console.log(permutations(1027));

const nextSmaller = number => {
  const combinations = permutations(number);
  const descendingArr = combinations.sort((f, s) => s - f);
  const nextSmall = descendingArr[descendingArr.indexOf(String(number)) + 1];
  return nextSmall === undefined
    ? -1
    : nextSmall[0] === "0"
    ? -1
    : Number(nextSmall);
};

console.log(nextSmaller(1027));
