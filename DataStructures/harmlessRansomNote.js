const harmlessRansomNote = (noteText, magazineText) => {
  // split both strings where there is a space
  let noteTextArr = noteText.split(" ");
  let magazineTextArr = magazineText.split(" ");
  let magazineObject = {};

  magazineTextArr.forEach(word => {
    if (!magazineObject[word]) {
      magazineObject[word] = 0;
    }
    magazineObject[word]++;
  });

  let noteIsPossible = true;
  noteTextArr.forEach(word => {
    if (magazineObject[word]) {
      magazineObject[word]--;
      if (magazineObject[word] < -1) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
};
console.log(harmlessRansomNote("my name", "my name is name and am my"));
