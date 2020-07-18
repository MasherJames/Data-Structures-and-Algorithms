const dec2FactString = value => {
  let divisor = 1;
  let res = [];
  while (value) {
    let val = value % divisor;
    value = Math.floor(value / divisor);
    val =
      val === 10
        ? "A"
        : val === 11
        ? "B"
        : val === 12
        ? "C"
        : val === 13
        ? "D"
        : val === 14
        ? "E"
        : val === 15
        ? "F"
        : val;
    res.unshift(val);
    divisor++;
  }
  return res.join("");
};

console.log(dec2FactString(2982));

function factString2Dec(str) {
  let res = 0;
  str
    .split("")
    .reverse()
    .forEach((e, i) => {
      res += factorial(i) * Number(e);
    });
  return res;
}

const factorial = num => {
  if (num === 0) {
    return 1;
  }
  let res = num;
  if (res)
    while (num > 1) {
      num--;
      res = res * num;
    }
  return res;
};

console.log(factString2Dec("341010"));

function dec2FactString2(n) {
  const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let s = "0",
    i = 2;
  while (n) {
    s = d[n % i] + s;
    n = Math.floor(n / i);
    i++;
  }
  return s;
}
function factString2Dec(s) {
  const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const l = s.length;
  return s.split("").reduce((a, e, i) => Number(a) * (l - i) + d.indexOf(e), 0);
}
