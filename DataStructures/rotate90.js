const concatenatePalindrome = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        let con = arr[i] + arr[j];
        if (
          con ===
          con
            .split("")
            .reverse()
            .join("")
        ) {
          res.push([i, j]);
        }
      }
    }
  }

  return res;
};
console.log(concatenatePalindrome(["code", "edoc", "da", "d"]));
