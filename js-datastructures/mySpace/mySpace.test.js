const mySpace = require("./mySpace");

describe("myspace test", function() {
  it("should test myspace", function() {
    let kk = {};
    Test.assertEquals(
      mySpace(kk, path, "This is my first ROT13 excercise!"),
      "This is my first ROT13 excercise!"
    );
  });
});
