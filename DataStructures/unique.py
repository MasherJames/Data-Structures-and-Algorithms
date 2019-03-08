# def findUniq(arr):
#     for i in range(len(arr)):
#         currNum = arr[i]
#         if currNum != arr[i+1]:
#             return arr[i + 1]
# print(findUniq([1, 1, 1, 0.55,  1, 1, ]))


# def arr_dif(arr1, arr2):
#     return [e for e in arr1 if e not in arr2]
# print(arr_dif([1, 2, 2, 2, 3], [2]))

d = {
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}


def flatten(dict):
    res = {}
    for k, v in dict.items():
        if type(v) == dict:
            flat = dict(v)
            for key, val in flat:
                res[str(k) + '.' + str(key)] = val
        else:
            res[str(k)] = v
    return res


print(flatten(d))
