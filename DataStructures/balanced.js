// Orange9000
// const balancedParenthesis = str => {
//   let arr = str.split("");
//   arr.reduce((prev, cur) => {
//     if (cur === "(") {
//       prev++;
//     } else if (cur === ")") {
//       prev--;
//     }
//   }, 0);
// };
// console.log(balancedParenthesis("(()()))("));

// function maxDepth(string) {
//   return string.split("").reduce(
//     ({ current, max }, char) => {
//       // Handle if parens open and close out of order
//       if (current < 0) return { current, max };
//       // Add 1 for each open in order
//       if (char === "(")
//         return { current: current + 1, max: Math.max(max, current + 1) };
//       // subtract 1 for each close in order
//       if (char === ")") return { current: current - 1, max };
//       return { current, max };
//     },
//     { current: 0, max: 0 }
//   ).max;
// }
// console.log(maxDepth("()"))

// function isBalanced([...str]) {
//   return (
//     str.reduce((uptoPrevChar, thisChar) => {
//       ((thisChar === "(" && uptoPrevChar++) ||
//         (thisChar === ")" && uptoPrevChar--)) &&
//         ((thisChar === "{" && uptoPrevChar++) ||
//           (thisChar === "}" && uptoPrevChar--)) &&
//         ((thisChar === "[" && uptoPrevChar++) ||
//           (thisChar === "]" && uptoPrevChar--));

//       return uptoPrevChar;
//     }, 0) === 0
//   );
// }
// console.log(isBalanced("[()]{}{()()}"));
