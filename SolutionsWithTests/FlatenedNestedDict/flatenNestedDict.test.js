const flattenNestedDict = require("./flattenNestedDict");

let d = {
  key: 3,
  foo: {
    a: 5,
    bar: {
      baz: 8
    }
  }
};

describe("Test flatennNestedDictionary", () => {
  it("Should test equality", () => {
    const res = flattenNestedDict(d);
    expect(res).toEqual({ key: 3, "foo.a": 5, "foo.bar.baz": 8 });
  });
});
