const pascals = n => {
    const pascalsTriangle = [];
    for (let i = 0; i <= n; i++) {
        let current = i;
        if (i === 0) {
            pascalsTriangle.push([1]);
        } else if (i === 1) {
            pascalsTriangle.push([1, 1]);
        } else {
            let prevArray = pascalsTriangle[current - 1];
            let calculatedVal = [];
            calculatedVal.push(1);
            prevArray.forEach((el, i) => {
                if (i !== prevArray.length - 1) {
                    calculatedVal.push(el + prevArray[i + 1]);
                }
            });
            calculatedVal.push(1);
            pascalsTriangle.push(calculatedVal);
        }
    }
    return pascalsTriangle;
}
console.log(pascals(10));