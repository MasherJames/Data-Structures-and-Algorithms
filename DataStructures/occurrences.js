// const occurrenceMatch = (string, pattern) => {
//   let re = new RegExp(pattern, "g");
//   let res = string.match(re);
//   return res.map((e, i, arr) => string.indexOf(e));
// };
// console.log(occurrenceMatch("abracadabra", "abr"));

const occurrenceMatch = (string, pattern) => {
  let res = string.search(pattern);
  return res;
};
console.log(occurrenceMatch("abracadabra", "abr"));
