function solve (num){
    let numToString = num.toString();
    let sum = 0;
    for (let i = 0 ; i< numToString.length; i++){
        sum += Number(numToString[i]);
    }
     let sumToString = sum.toString();
     
     if (sumToString.includes('9')){
         console.log(`${num} Amazing? True`)
     }else {
         console.log(`${num} Amazing? False`)
     }
}
solve(999)
