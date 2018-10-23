def data_reverse(data):
  lst = []
  res = []
  for i in range(0 , len(data) + 1):
    if i % 8 == 0 :
      lst.append(i)
  for j in range(0, len(lst) -1):
    res.append(data[lst[j]:lst[j + 1]])
  a = list(reversed(res))
  j = []
  for e in a:
    j += e
  return j
print(data_reverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))