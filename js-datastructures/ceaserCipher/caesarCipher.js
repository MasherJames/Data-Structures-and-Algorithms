// const caesarCipher = (str, num) => {
//   //get num modulus incase of large num inputs
//   num = num % 26;
//   const strLower = str.toLowerCase();
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   let newString = "";

//   for (let i = 0; i < strLower.length; i++) {
//     if (strLower[i] === " ") {
//       newString += strLower[i];
//       continue;
//     }
//     let curIndx = alphabet.indexOf(strLower[i]);
//     let newIndx = curIndx + num;

//     if (newIndx > 25) {
//       newIndx = newIndx - 26;
//     }
//     if (newIndx < 0) {
//       newIndx = newIndx + 26;
//     }
//     if (str[i] === str[i].toUpperCase()) {
//       newString += alphabet[newIndx].toUpperCase();
//     } else {
//       newString += alphabet[newIndx];
//     }
//   }
//   return newString;
// };

// module.exports = caesarCipher;
// console.log(caesarCipher("my Name Is James", 2));

const rot13 = str => {
  const strLower = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  newStr = "";

  for (let i = 0; i < strLower.length; i++) {
    if (alphabet.indexOf(strLower[i]) === -1) {
      newStr += strLower[i];
      continue;
    }
    let curIndex = alphabet.indexOf(strLower[i]);
    let newIndex = curIndex + 13;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }

    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }

    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else {
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
};

module.exports = rot13;
// console.log(rot13("This is my first ROT13 excercise!"));
