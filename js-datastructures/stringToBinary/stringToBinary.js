const stringToBinary = str => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    let asciiVal = str.charCodeAt(i);

    let strBin = "";
    while (asciiVal > 0) {
      asciiVal % 2 ? (strBin += "1") : (strBin += "0");
      asciiVal = Math.floor(asciiVal / 2);
    }
    res.push(
      strBin
        .split("")
        .reverse()
        .join("")
    );
  }
  return res;
};

module.exports = stringToBinary;
console.log(stringToBinary("GFG"));
