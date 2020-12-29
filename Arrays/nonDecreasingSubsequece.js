function solve(array){
    let result = [array[0]];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const nextEl = array[i+1];
        if (element < nextEl){
            
            result.push(nextEl)
        }else{
            result.push(element);
            result.pop();
        }
        
    }
console.log(result.join(' '));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
