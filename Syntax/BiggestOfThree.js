function solve (a,b,c){
let arr = [a,b,c];
let sorted= arr.sort((a,b)=>b-a);
let result = sorted.shift();
console.log(result);
}
solve(43,
    43.2,
    43.1
    )
