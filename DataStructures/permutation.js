const permutations = string => {
  let res = [];

  if (string.length === 1) {
    res.push(string);
    return res;
  }

  for (let i = 0; i < string.length; i++) {
    let curLet = string[i];
    let newStr = string.substring(0, i) + string.substring(i + 1);
    let recursiveRes = permutations(newStr);
    console.log(recursiveRes);
    for (let j = 0; j < recursiveRes.length; j++) {
      res.push(curLet + recursiveRes[j]);
    }
  }
  return [...new Set(res)];
};
console.log(permutations("aabb"));
