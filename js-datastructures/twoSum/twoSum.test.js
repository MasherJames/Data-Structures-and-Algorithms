const twoSum = require("./twoSum.js");

test("twoSum function exists", () => {
  expect(typeof twoSum).toEqual("function");
});

test("Should output an array of two elements which sum the res", () => {
  const res = twoSum([1, 6, 4, 5, 3, 3], 7);
  expect(res).toBe([[6, 1], [3, 4], [3, 4]]);
});
