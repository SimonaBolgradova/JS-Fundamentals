function solve(first, second){
    let sum1= 1;
for (let index = 1; index <= first; index++) {
sum1*=index;
    
}
let sum2=1;
for (let j = 1; j <= second; j++) {
    sum2*=j;
    
}
console.log((sum1/sum2).toFixed(2));
}
solve(5,2)
