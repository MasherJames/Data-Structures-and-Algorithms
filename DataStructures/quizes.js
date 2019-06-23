const stringSplitting = (s, n) => {
    if(n > 0){
      return s.match(new RegExp('.{1,' + n + '}', 'g'))
    }else {
      return [s]
    }
}
console.log(stringSplitting("this is a testa", 3))

const ceilingAlarm = (t, r, q) => {
    const res = [];
    r.forEach((temp, indx) => {
      if(temp > q && r[indx - 1] < 10 ){
        res.push(indx);
      }
    })
    return res.map(e => t[e]);
}
console.log(ceilingAlarm([45900, 45910, 45920, 45930, 45940, 45950], [0, 7, 12, 18, 8, 17], 10));

const stockBuying = p => {
    let lowestPrice = p[0];
    let profit = 0;
    for(let i = 0 ; i < p.length ; i ++){
        let currentVal = p[i];
        if(currentVal > lowestPrice){
            profit = Math.max(profit, currentVal - lowestPrice );
        }else {
            lowestPrice = currentVal
        }
    }
    console.log(`B = ${p.indexOf(lowestPrice) + 1}`);
    console.log(`S = ${p.indexOf(lowestPrice + profit) + 1}`);
}
stockBuying([30, 20, 10, 15, 17, 25, 20, 23]);