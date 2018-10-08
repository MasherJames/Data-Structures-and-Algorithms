const fibonacci = position => {
  if (position < 3) {
    return 1;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
};
console.log(fibonacci(9));
