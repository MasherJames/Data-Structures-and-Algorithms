const MeanSquareError = require("./MeanSquareError.js");

test("MeanSquareError function exists", () => {
  expect(typeof MeanSquareError).toEqual("function");
});

test("Should output the average of squared absolute value difference between each member pair of two arrs", () => {
  const res = MeanSquareError([10, 20, 10, 2], [10, 25, 5, -2]);
  expect(res).toEqual(16.5);
});
