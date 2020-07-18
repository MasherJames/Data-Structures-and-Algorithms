def find_missing(sequence):
  diff = (sequence[len(sequence) - 1] - sequence[0]) / len(sequence)
  for i in range(len(sequence)):
      if sequence[i + 1] - sequence[i] != diff:
        return sequence[i] + diff
print(find_missing([1, 3, 4, 5, 6, 7, 8, 9]))
