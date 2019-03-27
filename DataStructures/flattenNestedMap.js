let map = {
  a: {
    b: {
      c: 12,
      d: "Hello World"
    },
    e: [1, 2, 3]
  }
};
const flattenMap = map => {
  const res = {};
  for (const key in map) {
    if (
      typeof map[key] === "object" &&
      map[key] !== null &&
      map[key].constructor === Object
    ) {
      const flattened = flattenMap(map[key]);
      for (const nestedKey in flattened) {
        res[key + "/" + nestedKey] = flattened[nestedKey];
      }
    } else {
      res[key] = map[key];
    }
  }
  return res;
};

console.log(flattenMap(map));
