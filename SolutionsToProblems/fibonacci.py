def fibonacci(n):
  if n == 1:
    return 0
  if n < 3 and n > 1:
    return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
print(fibonacci(200))

