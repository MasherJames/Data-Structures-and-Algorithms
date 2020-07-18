def two_sum(numbers, target):
  sm = []
  for i in range(0, len(numbers)):
    for j in range(i + 1, len(numbers)):
      if numbers[i] + numbers[j] == target:
        sm.append([numbers[i], numbers[j]])
  return sm
print(two_sum([1,2,3], 4))

def two_sum(numbers, target):
#   index = []
#   for num in numbers:
#     curNum = num
#     curNumIndx = numbers.index(curNum)
#     # counter = target - curNum
#     # counterIndx = numbers.index(counter)
#     if(counterIndx != -1 and curNumIndx != counterIndx):
#       index.append([curNumIndx, counterIndx])
#   return index[0]
# print(two_sum([1234,5678,9012], 14690))