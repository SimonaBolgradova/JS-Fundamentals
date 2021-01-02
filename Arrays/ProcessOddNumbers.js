function solve(array){
    let result=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i%2==1){
            result.push(element*2);
        }
    }
    console.log(result.reverse().join(' '))
}
solve([10, 15, 20, 25])
