const permutations = string => {
    let res = [];
    console.log("called start")
    if (string.length === 1) {
        res.push(string);
        return res;
    }

    for (let i = 0; i < string.length; i++) {
        let curLet = string[i];
        // console.log(curLet)
        let newStr = string.substring(0, i) + string.substring(i + 1);
        let recursiveRes = permutations(newStr);
        // console.log(recursiveRes);
        for (let j = 0; j < recursiveRes.length; j++) {
            res.push(curLet + recursiveRes[j]);
        }
        // console.log("inside");
    }
    console.log("called end")
    return [...new Set(res)];
};
console.log(permutations("abc"));