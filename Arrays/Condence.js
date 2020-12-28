function solve(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i < array.length - 1) {
            result[i]= array[i]+array[i+1];
        } else {
            break;
        }
        
    console.log(result)
}
}
solve([5, 0, 4, 1, 2]);
