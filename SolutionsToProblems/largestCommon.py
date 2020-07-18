def lcs(x, y):
    res=''
    xArr=list(x)
    for i in y:
        if i in xArr:
            res+=i
            xArr[:(xArr.index(i)+1)]=[]
    return res
print(lcs("anothertest", "notatest"))