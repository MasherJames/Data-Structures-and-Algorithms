const fibMemo = (index, cache) => {
  cache = cache || [];
  if (cache[index]) {
    // check if the fibonacci num exists in cache and return it
    return cache[index];
  } else {
    // If the fibonacci does not exist in the cache, calculate it and put it in the cache
    if (index < 3) {
      // all number index less than 3 has a fibonacci of one
      return 1;
    } else {
      // calculate the fibonacci and store the value in the cache
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
};
console.log(fibMemo(50));
