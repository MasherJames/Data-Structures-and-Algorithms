def getMinSquares(n):
    if n <= 3:
        return n
    res = n
    for x in range(1, n+1):
        temp = x * x
        if temp > n:
            break
        else:
            res = min(res, 1 + getMinSquares(n - temp))

    return res


print(getMinSquares(6))
