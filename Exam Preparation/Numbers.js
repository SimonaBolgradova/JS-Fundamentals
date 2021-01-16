function solve(input){
    let arr = input.split(' ').map(Number);
    let sum= 0;
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum+=element;
        count++;
    }
    let average= sum/count;

    let greater = arr.filter(x=> x>average);
    greater.sort((a,b)=>b-a)

    if (greater.length ==0){
        console.log('No');
    }else{
    console.log(greater.slice(0,5).join(' '));
}
}
solve('10 20 30 40 50');
