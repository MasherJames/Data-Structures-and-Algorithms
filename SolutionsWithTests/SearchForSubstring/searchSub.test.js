const searchSub = require("./searchForSubstring");

test("test for searchSub", () => {
  expect(typeof searchSub).toEqual("function");
});

test("test true condition", () => {
  const res = searchSub("challenge", "alle");
  expect(res).toEqual(2);
});

test("test substring to search is longer", () => {
  const res = searchSub("qw", "alle");
  expect(res).toEqual(-1);
});

test("test substring to search is empty", () => {
  const res = searchSub("challenge", "");
  expect(res).toEqual(-1);
});

test("test string to search is empty", () => {
  const res = searchSub("", "alle");
  expect(res).toEqual(-1);
});
