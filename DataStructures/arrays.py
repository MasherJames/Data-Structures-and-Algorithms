def pairWithSum(arr, total):
    counterParts = []
    res = []
    for elem in arr:
        counterPart = total - elem
        if counterPart in counterParts:
            res.append((elem, counterPart))
        counterParts.append(elem)
    return res


arr1 = [11, 15, 6, 8, 9, 10]
sum1 = 16
arr2 = [20, 11, 15, 26, 38, 9, 10]
sum2 = 35
arr3 = [11, 15, 26, 38, 9, 10]
sum3 = 45
print(pairWithSum(arr1, sum1))
print(pairWithSum(arr2, sum2))
print(pairWithSum(arr3, sum3))
