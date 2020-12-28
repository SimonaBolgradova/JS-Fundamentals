function solve(arr1, arr2){
    let sum = 0;
    let isEq= true;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i]= Number(arr1[i]);
        sum+=Number(arr1[i]);
        
    }for (let i = 0; i < arr2.length; i++) {
        arr2[i]= Number(arr2[i]);
        if (arr1[i]!==Number(arr2[i])){
            isEq =false;
        }else{
         
        }
        
        
    }
    if (isEq){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
    
}
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
