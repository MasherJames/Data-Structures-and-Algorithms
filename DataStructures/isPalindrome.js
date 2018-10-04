const isPalindrome = str => {
  let lowerCaseStr = str.toLowerCase();
  let lowerCaseArr = lowerCaseStr.split("");
  let validChars = "abcdefghijklmnopqrstuvwxyz";

  let valid = [];
  lowerCaseArr.forEach(char => {
    if (validChars.indexOf(char) > -1) {
      valid.push(char);
    }
  });
  if (valid.join("") === valid.reverse().join("")) {
    return true;
  }
  return false;
};
console.log(isPalindrome("Madam I'm Adam"));

// Using regex to check is palindrome

const isPalindrome = str => {
  const modifyStr = str.toLowerCase().replace(/[^a-z0-9]+/g, "");

  return (
    modifyStr ===
    modifyStr
      .split("")
      .reverse()
      .join("")
  );
};
console.log(isPalindrome("Madam I'm Adam"));
