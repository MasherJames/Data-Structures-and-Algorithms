// ascending
const increasingInsertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    // For each loop from 1, hold the curr val and its pos
    let currentVal = arr[i];
    let position = i;

    /*
     If pos > 0 and the previous is greater than curr,
     displace current and replce it with prev val and reduce position
    */
    while (position > 0 && arr[position - 1] > currentVal) {
      arr[position] = arr[position - 1];
      position = position - 1;
    }
    // If pos is zero, that means its the least. place it at the beggining
    arr[position] = currentVal;
  }
};

let list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
increasingInsertionSort(list);
console.log(list);

// descending
const decreasingInsertionSort = arr => {
  for (let j = 1; j < arr.length; j++) {
    let currentValue = arr[j];
    let position = j;

    while (position > 0 && arr[position - 1] < currentValue) {
      arr[position] = arr[position - 1];
      position = position - 1;
    }
    arr[position] = currentValue;
  }
};

let s_list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
decreasingInsertionSort(s_list);
console.log(s_list);
