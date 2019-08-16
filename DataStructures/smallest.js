const smallest = (n) => {
   const nArr = String(n).split("");
   const first = Number(nArr[0]);
   const small = String(Math.min(...nArr));
   let newNum = ''
   if(small < first){
     let smallIdx = nArr.indexOf(small)
     newNum = nArr.splice(smallIdx, 1) + nArr.join("")
   } else if(small == first){
     let smallIdnx = nArr.indexOf(small)
     let newl = nArr.splice(smallIdnx, 1);
     newNum = String(Math.min(...nArr));
     let kk = String(n).split("").splice()
   }
   return newNum
}
console.log(smallest(2635));