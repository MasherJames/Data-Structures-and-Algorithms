// Two numbers, each of which is the sum of the factors of the other
const Amicable = (num) => {
  let sum = 1;
  for(let d = 2 ; d <= Math.sqrt(num) ; d ++){
    if(num % d === 0){
      sum += d
      if(num / d !== d){
        sum += num / d;
      }
    }
  }
  return sum;
}
console.log(Amicable(9))


// sum of digits of square of the number is equal to the number.
const NeonNumber = num => {
  let square = num**2
  let sum = 0
  while(square > 0){
    sum += square % 10;
    square = Math.floor(square / 10)
  }
  return sum === num
}
console.log(NeonNumber(9))
console.log(NeonNumber(12))
console.log(NeonNumber(16))

// square ends in the same digits as the number itself
const AutomophicOrCircular = (num) => {
  let square = num**2;
  while(num > 0){
    if(num % 10 !== square % 10){
      return false
    } else {
      num = Math.floor(num / 10)
      square = Math.floor(square / 10)
    }
  }
  return true
}
console.log(AutomophicOrCircular(7))