function OddAndEvenSum(num){

    let arr = String(num). split('');
    let sumEven = 0;
    let sumOdd= 0;
    for (let i = 0; i<arr.length; i++){
        const n = Number(arr[i]);
        if (n %2==0){
            sumEven+=n;
        }else {
            sumOdd+=n;
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
  
}
console.log(OddAndEvenSum(1000435));
