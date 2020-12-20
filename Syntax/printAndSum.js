function solve(start, end){
    let sum =0;
    let result =[];
    for (let i=start; i<=end; i++){
        sum+=i;
        result.push(i);
    }
    console.log(result.join(' '))
    console.log(`Sum: ${sum}`);
}
solve(0,26);
