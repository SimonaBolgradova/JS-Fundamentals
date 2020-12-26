function solve(input) {
    
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            result.push(i+1);
            
        } else if (input[i] == 'remove') {
            result.pop();
            
        }
        
    }
    if (result.includes(1)){
    console.log(result.join(' '))
    }else{
        console.log('Empty')
    }
}
solve(['add', 'add', 'add', 'add']);
