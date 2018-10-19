def eachPascals(m):
    if m == 1:
        return [1]
    else:
        line = [1]
        prevLine = eachPascals(m -1)
        for i in range(len(prevLine) -1):
            line.append(prevLine[i] + prevLine[i + 1])
        line += [1]
    return line

def pascalsArr(n):
    arrRes = []
    for j in range(1, n + 1):
        res = eachPascals(j)
        arrRes.append(res)
    return arrRes
print(pascalsArr(4))


def pascals(n):
    arrRes = []
    for j in range(1, n + 1):
        res = eachPascals(j)
        arrRes += res
    return arrRes
print(pascals(4))