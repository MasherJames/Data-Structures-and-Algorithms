const caesarCipher = require("./caesarCipher");

test("caesarCipher should exist for testing", () => {
  expect(typeof caesarCipher).toEqual("function");
});

test("should output string with all letters changed depending on num", () => {
  const res = caesarCipher("my Name Is James", 2);
  expect(res).toEqual("oa Pcog Ku Lcogu");
});

const rot13 = require("./caesarCipher");

test("caesarCipher function exists for testing", () => {
  expect(typeof rot13).toEqual("function");
});

test("should output rot13 string on the string given", () => {
  const res = rot13("This is my first ROT13 excercise!");
  expect(res).toEqual("Guvf vf zl svefg EBG13 rkprepvfr!");
});

describe("rot13 test", function() {
  it("should test rot13", function() {
    Test.assertEquals(
      rot13("This is my first ROT13 excercise!"),
      "Guvf vf zl svefg EBG13 rkprepvfr!"
    );
  });
});
