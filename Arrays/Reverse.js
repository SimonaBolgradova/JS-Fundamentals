function solve (num,array){
let partialArr = [];
    for (let i=0 ; i<num; i++){
        partialArr.push(array[i]);
    }
    let result ='';
    for (let i = partialArr.length -1; i>=0 ; i--){
        result+=partialArr[i];
        result+= ' ';
    }
    console.log(result);
}
solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5])
