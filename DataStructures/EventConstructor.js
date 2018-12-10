const adj = {
  "1": ["1", "2", "4"],
  "2": ["1", "2", "3", "5"],
  "3": ["2", "3", "6"],
  "4": ["1", "4", "5", "7"],
  "5": ["2", "4", "5", "6", "8"],
  "6": ["3", "5", "6", "9"],
  "7": ["4", "7", "8"],
  "8": ["5", "7", "8", "9", "0"],
  "9": ["6", "8", "9"],
  "0": ["8", "0"]
};

const getPINs = observed => {
  let possibilites = [""];
  while (observed) {
    const adjacent = adj[observed[0]];
    const newPossibs = [];
    for (let i = 0; i < adjacent.length; i++) {
      for (let j = 0; j < possibilites.length; j++) {
        newPossibs.push(possibilites[j] + adjacent[i]);
      }
    }
    observed = observed.slice(1);
    possibilites = newPossibs;
  }
  return possibilites;
};
console.log(getPINs("11"));
