function solve (n){
    let times = 0;
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i%2==1){
            times++
            sum+=i;
            console.log(i);
         }
        if (times>=n){
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(5)
