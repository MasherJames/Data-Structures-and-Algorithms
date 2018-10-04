const caesarCipher = (str, num) => {
  //get num modulus incase of large num inputs
  num = num % 26;
  const strLower = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i] === " ") {
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
console.log(caesarCipher("my Name Is James", 2));
