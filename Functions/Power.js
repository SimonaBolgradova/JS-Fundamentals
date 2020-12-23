function solve(base , exponent){
    let result = 1;
    for (let i =1; i<=exponent;i++){
        result*=base;
    }
    console.log(result);
}
solve(2,8)
