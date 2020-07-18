# def permutate():


def permutateNumbers(arr, val):
    res = []
    for i in range(1, len(arr) + 1):
        if(i == val):
            toRemove = arr[val - 1]
            arr.remove(toRemove)
            newArr = arr[val - 1:] + arr[0:val - 1]
            print(newArr)
            # res.append(newArr)
            permutateNumbers(newArr, val)
    return res
print(permutateNumbers([1, 2, 3, 4, 5, 6, 7], 3))
