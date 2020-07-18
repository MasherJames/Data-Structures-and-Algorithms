# def getMinSquares(n):
#     if n <= 3:
#         return n
#     res = n
#     for x in range(1, n+1):
#         temp = x * x
#         if temp > n:
#             break
#         else:
#             res = min(res, 1 + getMinSquares(n - temp))

#     return res


# print(getMinSquares(15))
import math


def numSquares(n):
    if n <= 3:
        return n
    squares = {i * i for i in range(1, int(math.floor(math.sqrt(n))) + 1)}
    sums = squares
    for i in range(1, n):
        if n in sums:
            return i
        sums = {a + b for a in squares for b in sums if a + b <= n}
        print(sums)
    return sums


print(numSquares(15))
