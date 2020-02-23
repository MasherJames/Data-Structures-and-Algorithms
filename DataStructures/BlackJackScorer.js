// const combination = arr => {
//   const res = arr.reduce(
//     (acc, cur, i) => acc.concat(arr.slice(i + 1).map(e => cur + e)),
//     []
//   );
//   return [...new Set(res)];
// };

// const possibleRes = arr => {
//   const greaterThan21 = arr.filter(e => e > 21);
//   const lessThan21 = arr.filter(e => e <= 21);

//   return lessThan21.length
//     ? Math.max(...lessThan21)
//     : Math.min(...greaterThan21);
// };
// const scoreHand = cards => {
//   const thereAreNumbers = cards.some(e => parseInt(e, 10));
//   const asArr = cards.filter(e => e === "A");
//   const asVal = [];
//   let possibleSums = [];
//   let singleSum = 0;

//   if (cards.includes("K") || cards.includes("Q") || cards.includes("J")) {
//     const kqjs = cards.filter(e => e === "K" || e === "Q" || e === "J");
//     kqjs.forEach(e => {
//       singleSum += 10;
//     });
//   }
//   if (thereAreNumbers) {
//     const nums = cards.filter(e => parseInt(e, 10));
//     nums.forEach(e => {
//       singleSum += parseInt(e);
//     });
//   }

//   if (asArr.length) {
//     asArr.forEach(e => {
//       asVal.push(1);
//       asVal.push(11);
//     });

//     const possibleAsSum = asVal.length > 2 ? combination(asVal) : asVal;

//     possibleSums = possibleAsSum.map(asSum => asSum + singleSum);
//   }

//   return possibleSums.length ? possibleRes(possibleSums) : singleSum;
// };
// console.log(scoreHand(["4", "3", "A", "9", "J", "A"]));

const scoreHand = cards => {
  let noAsSum = 0;
  const asCards = cards.filter(element => element === "A");
  for (let card of cards) {
    const int = parseInt(card);
    if (int) {
      noAsSum += int;
    }
    if (["J", "Q", "K"].includes(card)) {
      noAsSum += 10;
    }
  }
  const kk = asCards.reduce((acc, cur) => {}, []);
  return noAsSum;
};
console.log(scoreHand(["5", "4", "3", "2", "A", "K"]));
