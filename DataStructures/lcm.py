from functools import reduce


def lcm(x, y):
    if x > y:
        greater = x
    else:
        greater = y
    while(True):
        if((greater % x == 0) and (greater % y == 0)):
            lcm = greater
            break
        greater += 1
    return lcm


def convertFracs(lst):
    res = []
    denominators = [e[1] for e in lst]
    commonDenom = reduce(lambda a, b: lcm(a, b), denominators)
    for elem in lst:
        numen = commonDenom / elem[1]
        res.append([numen, commonDenom])
    return res
print(convertFracs([(1, 2), (1, 3), (1, 4)]))
