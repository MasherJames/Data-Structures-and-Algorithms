// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// ASCII -  code for representing 128 English characters as numbers, with each letter assigned a number from 0 to 127

// const doYourThing = (string) => {
//   if (string.length === 0) return "";
//   if (string.length === 1) return string.charCodeAt(0);
//   if (string.length === 2) {
//     return string.charCodeAt(0) + string[1];
//   }
//   if (string.length === 3) {
//     return string.charCodeAt(0) + string[string.length - 1] + string[1];
//   }
//   return (
//     string.charCodeAt(0) +
//     string[string.length - 1] +
//     string.slice(2, string.length - 1) +
//     string[1]
//   );
// };

// const encryptThis = (text) => {
//   return text
//     .split(" ")
//     .map((string) => doYourThing(string))
//     .join(" ");
// };

// const encryptThis = (text) =>
//   text
//     .split(" ")
//     .map((word) =>
//       word
//         .replace(/^(\w)(\w)(\w*)(\w)$/, `$1$4$3$2`)
//         .replace(/^\w/, word.charCodeAt(0))
//     )
//     .join(" ");

// console.log(encryptThis("A"));
// console.log(encryptThis("A wise old owl lived in an oak"));
// console.log(encryptThis("The more he saw the less he spoke"));
// console.log(encryptThis("The less he spoke the more he heard"));

// console.log(encryptThis("Why can we not all be like that wise old bird"));
// console.log(encryptThis("Thank you Piotr for all your help"));
// console.log(encryptThis("hello world"));

const decipherThisThing = (string) => {
  newString = string.replace(string.match(/[\d]+/), "");
  return (
    String.fromCharCode(string.match(/[\d]+/)) +
    newString.replace(/^(\w)(\w*)(\w)$/, "$3$2$1")
  );
};

const decipherThis = (str) => {
  return str
    .split(" ")
    .map((string) => decipherThisThing(string))
    .join(" ");
};

console.log(decipherThis("72olle 103doo 100o")); // 'Hello good day'
console.log(decipherThis("82yade 115te 103o")); // 'Ready set go'
