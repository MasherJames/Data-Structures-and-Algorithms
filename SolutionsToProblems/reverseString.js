const reverseString = str => {
  const strArr = str.split(" ");
  const reversedStrArr = [];

  strArr.forEach(word => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedStrArr.push(reversedWord);
  });
  return reversedStrArr.join(" ");
};
console.log(reverseString("this is my yard"));
