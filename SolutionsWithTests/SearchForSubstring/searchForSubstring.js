const searchForSubstring = (stringToSearch, stringToFind) => {
  if (
    stringToFind === null ||
    stringToFind.length > stringToSearch.length ||
    stringToFind === "" ||
    stringToSearch.length === 0
  ) {
    return -1;
  }
  return stringToSearch.indexOf(stringToFind);
};

module.exports = searchForSubstring;
// console.log(searchForSubstring("challenge", "alle"));
// console.log(searchForSubstring("qw", "alle"));
// console.log(searchForSubstring("challenge", ""));
// console.log(searchForSubstring("", "alle"));
