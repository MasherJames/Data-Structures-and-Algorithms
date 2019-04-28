const isHamming = num => {
  while(num % 5 === 0) num /= 5
  while(num % 3 === 0) num /= 3
  while(num % 2 === 0) num /= 2

  return num === 1
}

const hamming = n => {
  let nthHamming = [1]
  let count = nthHamming.length
  let toCheck = 1

  while(n > count){
    toCheck ++
    if(isHamming(toCheck)){
      nthHamming[count] = toCheck
      count++
    }
  }
  return nthHamming[n-1]
}
console.log(hamming(150))