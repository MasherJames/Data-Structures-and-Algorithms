def findUniq(arr):
    for i in range(len(arr)):
        currNum = arr[i]
        if currNum != arr[i+1]:
            return arr[i + 1]
print(findUniq([1, 1, 1, 0.55,  1, 1, ]))
