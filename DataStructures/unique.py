# def findUniq(arr):
#     for i in range(len(arr)):
#         currNum = arr[i]
#         if currNum != arr[i+1]:
#             return arr[i + 1]
# print(findUniq([1, 1, 1, 0.55,  1, 1, ]))


def arr_dif(arr1, arr2):
    return [e for e in arr1 if e not in arr2]
print(arr_dif([1, 2, 2, 2, 3], [2]))