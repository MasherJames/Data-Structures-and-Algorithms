const caesarCipher = (str, num) => {
  num = num % 26;
  const strLower = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (let i = 0; i < strLower.length; i++) {
    if (alphabet.indexOf(strLower[i]) === -1) {
      newString += strLower[i];
      continue;
    }
    let curIndx = alphabet.indexOf(strLower[i]);
    let newIndx = curIndx + num;

    if (newIndx > 25) {
      newIndx = newIndx - 26;
    }
    if (newIndx < 0) {
      newIndx = newIndx + 26;
    }
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndx].toUpperCase();
    } else {
      newString += alphabet[newIndx];
    }
  }
  return newString;
};

module.exports = caesarCipher;
// console.log(caesarCipher("Mocha chai jest 12345+_*", 912));
