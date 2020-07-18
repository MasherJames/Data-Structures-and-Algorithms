const numberPalindrome = num => {
  let currNum = num;
  let newNum = 0;
  while (currNum !== 0) {
    const remainder = currNum % 10;
    newNum = newNum * 10 + remainder;
    currNum = Math.floor(currNum / 10);
  }
  return newNum === num ? `${num} is palindrome` : `${num} is not palindrome`;
};
console.log(numberPalindrome(121));
