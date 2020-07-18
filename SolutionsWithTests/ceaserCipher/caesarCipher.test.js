const caesarCipher = require("./caesarCipher");

test("caesaCipher exists", () => {
  expect(typeof caesarCipher).toEqual("function");
});

test("test with num 2", () => {
  const res = caesarCipher("my Name Is James", 2);
  expect(res).toEqual("oa Pcog Ku Lcogu");
});

test("test with num 13", () => {
  const res = caesarCipher("This is my first ROT13 excercise!", 13);
  expect(res).toEqual("Guvf vf zl svefg EBG13 rkprepvfr!");
});

test("test with num 1200", () => {
  const res = caesarCipher("@@@Not Done React Testing &?", 1200);
  expect(res).toEqual("@@@Rsx Hsri Viegx Xiwxmrk &?");
});

test("test with num 67", () => {
  const res = caesarCipher("This is *** so weird 90", 67);
  expect(res).toEqual("Iwxh xh *** hd ltxgs 90");
});

test("test with num 912", () => {
  const res = caesarCipher("Mocha chai jest 12345+_*", 912);
  expect(res).toEqual("Oqejc ejck lguv 12345+_*");
});
