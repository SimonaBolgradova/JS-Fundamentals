function solve(n,k){
    let result=[1];
    for(let i=0; i<n-1;i++){
        let sum =1;
        if (result.length<k){
            sum+=i;
            result.push(sum);
        }else{
            let sum1=0;
            let sliced= result.slice(-k);
            for (const el of sliced) {
                sum1+=el;
            }
            result.push(sum1);
        }
    }
    console.log(result.join(' '));
}
solve(8,2)
