const chai = require("chai");
const expect = chai.expect;
const stringToBinary = require("./stringToBinary");

describe("String To Binary Test", () => {
  it("Checks for String in Binary Form", () => {
    let bin = stringToBinary("GFG");
    expect(bin).to.eql(["1000111", "1000110", "1000111"]);
    expect(bin).to.deep.eql(["1000111", "1000110", "1000111"]);
    expect(bin).to.have.ordered.members(["1000111", "1000110", "1000111"]);
  });
});
