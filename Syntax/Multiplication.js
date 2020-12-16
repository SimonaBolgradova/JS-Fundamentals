function solve (number){
    let n =parseInt(number);
    let multiply = 0;
    for(let i = 1;i<=10; i++){
        multiply= n*i;
        console.log(`${n} X ${i} = ${multiply}`);

    }
}
solve(5);
