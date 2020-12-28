function solve(array){
    let sumEven= 0;
    let sumOdd = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] %2==0){
                sumEven+=array[i];
            }else {
                sumOdd+=array[i];
            }
            
        }
        console.log(sumEven - sumOdd);
}
solve([1,2,3,4,5,6]);
