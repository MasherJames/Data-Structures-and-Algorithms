const snail = array => {
    let res;
    while (array.length) {
        res = res ? res.concat(array.shift()) : array.shift()
        for (let i = 0; i < array.length; i++) {
            res.push(array[i].pop())
        }
        res = res.concat((array.pop() || []).reverse())
        for (let i = array.length - 1; i >= 0; i--) {
            res.push(array[i].shift())
        }
    }
    return res
}
let arr = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];
console.log(snail(arr))