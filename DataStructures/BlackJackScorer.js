// const scoreHand = (cards) => {
//   let total = 0;
//   const jkq = ["J", "K", "Q"];
//   let lowerAces = 0;

//   for (let card of cards) {
//     if (jkq.includes(card)) {
//       total += 10;
//     } else if (card === "A") {
//       total += 11;
//       lowerAces += 1;
//     } else {
//       total += Number(card);
//     }
//   }

//   for (let i = 1; i <= lowerAces; i++) {
//     if (total > 21) {
//       total -= 10;
//     }
//   }
//   return total;
// };

const scoreHand = (cards) => {
  let total = 0;
  const jkq = ["J", "K", "Q"];
  let aces = cards.filter((e) => e === "A");

  for (let card of cards) {
    if (jkq.includes(card)) {
      total += 10;
    } else if (card === "A") {
      total += 1;
    } else {
      total += Number(card);
    }
  }
  for (let _ in aces) {
    if (total < 12) {
      total += 10;
    }
  }
  return total;
};

// Calculate scores with cards 2-10
console.log(scoreHand(["2", "3"]));
console.log(scoreHand(["7", "7", "8"]));
console.log(scoreHand(["4", "7", "8"]));

// should score J, Q and K as 10
console.log(scoreHand(["K", "J", "Q"]));

// should core hands with Aces correctly
console.log(scoreHand(["A", "3"]));
console.log(scoreHand(["A", "A"]));
console.log(scoreHand(["A", "2", "A", "9", "9"]));
