const fibonacci = position => {
  if (position === 0) {
    return 0;
  }
  if (position < 3 && position > 0) {
    return 1;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
};
console.log(fibonacci(0));
