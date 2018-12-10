const firstNonRepeatingChars = str => {
  const arrRes = {};
  const list = [];
  for (let i = 0; i < str.length; i++) {
    if (!arrRes[str[i]]) {
      arrRes[str[i]] = 0;
    }
    arrRes[str[i]]++;
  }
  for (let elem in arrRes) {
    if (arrRes[elem] === 1) {
      list.push(elem);
    }
  }
  return list[0];
};
console.log(firstNonRepeatingChars("jamesaqsmmjklo"));
