const flattenNestedDict = dict => {
  const res = {};
  for (const key in dict) {
    if (typeof dict[key] === "object" && dict[key] !== null) {
      let flattened = flattenNestedDict(dict[key]);
      for (const nestedKey in flattened) {
        res[key + "." + nestedKey] = flattened[nestedKey];
      }
    } else {
      res[key] = dict[key];
    }
  }
  return res;
};
let d = {
  key: 3,
  foo: {
    a: 5,
    bar: {
      baz: 8
    }
  }
};
module.exports = flattenNestedDict;
console.log(flattenNestedDict(d));
