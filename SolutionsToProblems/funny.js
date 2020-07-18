// const scoreHand = arr => {
//   const noAs = arr.filter(e => e !== "A");
//   const filterAs = arr.filter(e => e === "A");
//   let totalSum = 0;

//   if (noAs.length > 0) {
//     totalSum = noAs.reduce((acc, cur) => {
//       if (!isNaN(cur)) {
//         return acc + parseInt(cur);
//       } else {
//         return acc + 10;
//       }
//     }, 0);
//   }

//   if (filterAs.length > 0) {
//     if (totalSum >= 21) {
//       totalSum = totalSum + filterAs.length;
//     } else {
//       console.log("Not covered");
//     }
//     return total;
//   }
//   return totalSum;
// };

// const scoreHand = cards => {
//   const kjqs = ["K", "J", "Q"];
//   let ones = 0;
//   let totalScore = 0;
//   for (let i of cards) {
//     if (kjqs.includes(i)) {
//       totalScore += 10;
//     } else if (!isNaN(i)) {
//       totalScore += parseInt(i);
//     } else {
//       totalScore += 11;
//       ones += 1;
//     }
//   }
//   while (ones > 0) {
//     if (totalScore > 21) {
//       totalScore -= 10;
//     }
//     ones--;
//   }
//   return totalScore;
// };

// const cardsMap = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
//   6: 6,
//   7: 7,
//   8: 8,
//   9: 9,
//   10: 10,
//   J: 10,
//   Q: 10,
//   K: 10,
//   A: 1
// };

// const scoreHand = cards => {
//   const sum = cards.reduce((acc, card) => acc + cardsMap[card], 0);

//   return sum < 12 && cards.includes("A") ? sum + 10 : sum;
// };

// console.log(scoreHand(["2", "3"]));
// console.log(scoreHand(["7", "7", "8"]));
// console.log(scoreHand(["4", "7", "8"]));

// // should score J, Q and K as 10
// console.log(scoreHand(["K", "J", "Q", "A", "A"]));
// console.log(scoreHand(["K", "J", "Q"]));
// // should core hands with Aces correctly
// console.log(scoreHand(["A", "3"]));
// console.log(scoreHand(["A", "A"]));
// console.log(scoreHand(["A", "2", "A", "9", "9"]));

// function rowSumOddNumbers(n) {
//   let num = 1;
//   const allOdds = [];
//   const res = [];
//   for (let i = 0; i <= 10; i++) {
//     allOdds.push(num);
//     num += 2;
//   }
//   for (let i = 1; i <= allOdds.length; i++) {

//   }
//   return allOdds;
// }
// console.log(rowSumOddNumbers(2));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.slice(0, 2);
// console.log(arr);

function addRow(n) {
  var total = 0;
  for (var i = 0; i < n; i++) {
    total += i;
    // console.log(total);
  }
  var firstNum = 2 * total + 1;
  // console.log(firstNum);
  // //   console.log(firstNum)
  var sum = 0;
  for (j = 0; j < n; j++) {
    sum += firstNum;
    firstNum += 2;
    console.log("in loop ", sum);
  }
  return sum;
}

addRow(42);
