function solve(arr){
    let newArr =[];
    let index=-1;
    let sum1= 0;
    let sum2=0;
for (let i =0 ; i<arr.length; i++){
    index++;
    sum1+=arr[i];
    if (arr[i]% 2==0){
        arr[i]+=index;
        newArr.push(arr[i]);
    }else{
        arr[i]-=index;
        newArr.push(arr[i]);
    }
    
}
for (let j= 0;j<newArr.length;j++){
    sum2+=newArr[j];
    }
console.log(newArr);
console.log(sum1);
console.log(sum2);
}
solve([5, 15, 23, 56, 35]);
