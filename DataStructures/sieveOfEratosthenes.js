// Getting all prime numbers upto a given number

const sieveOfEratosthenes = num => {
  let primes = [];
  // This loop marks all the value as true(they are prime)
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }
  // 0 and 1 are absolutely not prime
  primes[0] = false;
  primes[1] = false;

  //Looping on the rest of index upto sqrt of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    //for each i, we mark false index that it can divide(or be a multiple of)
    for (let j = 2; j * i <= num; j++) {
      // We loop upto an index less than num
      primes[i * j] = false;
    }
  }
  let validPrimes = [];
  // Loop on primes array and return num at index marked as true
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      validPrimes.push(i);
    }
  }
  return validPrimes;
};
console.log(sieveOfEratosthenes(2000));
