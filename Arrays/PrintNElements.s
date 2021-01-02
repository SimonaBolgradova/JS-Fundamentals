function solve(input){
    let arr = input;
    let last = Number(arr.pop());
    let result =[];
    for (let i = 0; i < arr.length; i+=last) {
        result.push(arr[i]);

        
    }
    console.log(result.join(' '))
}
solve(['dsa', 'asd', 'test', 'test', '2'])
